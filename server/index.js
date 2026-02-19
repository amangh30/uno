import { Server } from "socket.io";

const io = new Server(3000, {
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


// testing