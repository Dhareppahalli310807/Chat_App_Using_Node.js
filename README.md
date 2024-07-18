# Chat App Using Node.js

This is a simple real-time chat application built using Node.js, Express, Socket.io, and MongoDB. The application allows users to join a chat room, send messages, and see messages from other users in real-time. Previous messages are also loaded when a user joins.

## Features
- Real-time messaging with Socket.io
- Stores chat history in MongoDB
- Loads last 50 messages when a user joins

## Prerequisites
- Node.js installed
- MongoDB installed and running on your local machine

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Dhareppahalli310807/Chat_App_Using_Node.js
   cd Chat_App_Using_Node.js

2. Install dependencies:
    npm install

3. Create a MongoDB database:
    Make sure MongoDB is running and accessible at mongodb://localhost:27017. You can modify the connection string in config.js if necessary.

4. Start the server:
    npm start

# License
This project is licensed under the MIT License.