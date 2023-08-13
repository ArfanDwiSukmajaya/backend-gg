import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  videoID: {
    type: String,
    ref: "Video",
    required: true,
    // Set opsi localField untuk menghubungkan dengan videoCustomID
    localField: "videoID",
    foreignField: "videoID",
  },
  productID: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true },
});

export default productSchema;
