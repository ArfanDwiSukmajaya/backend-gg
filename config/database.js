import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const dbURI = process.env.DATABASE_URL;
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Terhubung ke database");
  } catch (error) {
    console.error("Kesalahan koneksi ke database:", error);
  }
};

export default connectToDatabase;
