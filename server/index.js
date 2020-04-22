var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).send("connected");
});

io.on("connection", function (socket) {
  console.log("connected");
  socket.on("join", (data) => socket.send("Hello client from server"));
  socket.on("join", (data) => console.log(data));
  socket.on("message", function (data) {
    console.log(data);
  });
});

http.listen(port, function () {
  console.log("listening on *:" + port);
});
