import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';


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
    socket.on('new_message', (message)=>{
        // broadcast this message to all clients
        socket.broadcast.emit('broadcast_message', message);
    })
    socket.on("disconnect", ()=>{
        console.log("Connection is disconnect");
    })
});

server.listen(8080, ()=>{
    console.log("server is listining on port 8080");
})