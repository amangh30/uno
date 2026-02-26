const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("create-room", () => {
    const roomId = Math.random().toString(36).substring(2, 7);
    rooms[roomId] = [socket.id];

    socket.join(roomId);
    socket.emit("room-created", roomId);

    console.log("Room created:", roomId);
  });

  socket.on("join-room", (roomId) => {
    if (!rooms[roomId]) {
      socket.emit("error-room");
      return;
    }

    rooms[roomId].push(socket.id);
    socket.join(roomId);

    io.to(roomId).emit("players-update", rooms[roomId]);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});