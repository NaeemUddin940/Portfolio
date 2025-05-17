import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async (req, res) => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Successfully Database Connected");
  } catch (error) {
    console.log(`❌ Database Connected Error: ${error}`);
  }
};
