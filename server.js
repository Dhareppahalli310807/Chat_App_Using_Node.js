import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import { connect } from './config.js';
import chatModel from './chat.schema.js';
import { timeStamp } from 'console';


const app = express();

// 1. create server using http
const server = http.createServer(app);

// 2. create socket server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods:["GET", "POST"]
    }
});

// 3. user socket events
io.on('connection', (socket)=>{
    console.log("Connection was established..");

    // for user 
    socket.on("join", (data)=>{
        socket.username = data;

        // send old message to the clients
        chatModel.find().sort({timestamp: 1}).limit(50).then(messages=>{
            socket.emit('load_messages', messages);
        }).catch(err=>{
            console.log(err);
        })
    })
    socket.on('new_message', (message)=>{

        let userMessage= {
            username: socket.username,
            message: message
        }

        // to call database
        const newChat = new chatModel({
            username: socket.username,
            message: message,
            timestamp: new Date()
        });
        newChat.save();
        // broadcast this message to all clients
        socket.broadcast.emit('broadcast_message', userMessage);
    })
    socket.on("disconnect", ()=>{
        console.log("Connection is disconnect");
    })
});

server.listen(9090, ()=>{
    console.log("server is listining on port 8080");
    connect();
});