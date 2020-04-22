var io = require("socket.io-client");

const socket = io.connect("https://messenger-be.herokuapp.com/");

socket.on("message", (msg) => console.log(msg));
socket.on("connect", (msg) => console.log(msg));
socket.on("join", (msg) => console.log(msg));

socket.emit("connect", (msg) => console.log(msg));
