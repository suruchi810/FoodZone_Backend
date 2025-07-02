import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

