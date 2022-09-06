const tetris = require("./tetris");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("someone connected");
  tetris.initializeGame(io, socket);
});

http.listen(process.env.PORT || 8080, function () {
  console.log("listening on *:8080");
});
