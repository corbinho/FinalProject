const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championSchema = new Schema({
  name: { type: String, required: true },
  health: { type: Number, required: true },
  attack1: { type: Number, required: true },
  attack1cost: { type: Number, required: true },
  attack2: { type: Number, required: true },
  attack2cost: { type: Number, required: true },
  weakness: { type: String, required: false },
  strength: { type: String, required: false }
});

const champion = mongoose.model("champion", championSchema);

module.exports = champion;