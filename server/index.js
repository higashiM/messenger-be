var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

/* app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
}); */

io.on("connect", function (socket) {
  console.log("connected");
  socket.emit("welcome");
  socket.on("message", function (msg) {
    io.emit("message", msg);
  });
});

http.listen(port, function () {
  console.log("listening on *:" + port);
});
