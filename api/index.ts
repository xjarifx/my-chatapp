import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { PORT, SOCKET_URL } from "../configs/env.ts";

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on("connection", (socket) => {
  console.log("A new user connected: " + socket.id);

  socket.broadcast.emit("user-joined", `User ${socket.id} just joined`);

  socket.on("chat message", (msg: string) => {
    io.emit("chat message", { id: socket.id, message: msg });
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
    io.emit("user-disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${SOCKET_URL}`);
});
