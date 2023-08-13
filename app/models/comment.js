import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  videoID: {
    type: String,
    ref: "Video",
    required: true,
    // Set opsi localField untuk menghubungkan dengan videoCustomID
    localField: "videoID",
    foreignField: "videoID",
  },
  commentID: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

export default commentSchema;
