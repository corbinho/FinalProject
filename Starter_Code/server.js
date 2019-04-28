const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
<<<<<<< HEAD
const app = express();
=======
const app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const mongoose = require("mongoose");
// const routes = require("./routes");
>>>>>>> 86ea2dc7b70d84c5a94a65c33c3e83d8be2281c1

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

<<<<<<< HEAD
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
=======
// app.use(routes);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('a user disconnected')
  });
>>>>>>> 86ea2dc7b70d84c5a94a65c33c3e83d8be2281c1
});



