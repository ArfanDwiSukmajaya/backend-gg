import mongoose from "mongoose";
import productSchema from "./product.js";
import commentSchema from "./comment.js";

const vodioSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  products: [productSchema],
  comments: [commentSchema],
});

export default mongoose.model("Video", vodioSchema);
