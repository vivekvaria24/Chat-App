import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

//Create Express App and HTTP Server
const app = express();
const server = http.createServer(app);

//Initialize soket.io Server
export const io = new Server(server,{
    cors:{origin:"*"}
})

//Store Online User
export const userSocketMap = {}; // { userId: socketId }

//Soket.io Connection handler
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId)

    if(userId){
        userSocketMap[userId] = socket.id;
    }

    //Emit Online User to all Connected Client
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("User Disconnected", userId);
        if(userId){
            delete userSocketMap[userId];
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })

})

//Middleware Setup
app.use(express.json({limit:"4mb"}));
app.use(cors());

//Routes Setup
app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);

const PORT = process.env.PORT || 5000;

//Connect Mongodb
await connectDB();

server.listen(PORT,()=>{
    console.log(`Server is Running on: ${PORT}`)
})