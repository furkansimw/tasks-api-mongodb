const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "must provide task"],
    maxlength: [20, "name can not be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
