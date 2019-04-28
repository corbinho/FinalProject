const path = require("path");
const PORT = process.env.PORT || 3001;
const app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const mongoose = require("mongoose");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(routes);

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('a user disconnected')
  });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pokemonDB");


http.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
