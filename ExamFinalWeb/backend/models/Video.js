const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  channel_name: String,
  Views: Number,
  description: String,
  channel_name: String,
  url: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  createdAt: { type: Date, default: Date.now }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Video', videoSchema);
