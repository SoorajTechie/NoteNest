// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
 
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',      // Reference to User model
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('notes', noteSchema);
