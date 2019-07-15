const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  content: {
    type: String,
    required: true
  },
  title: {
    type: String
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
