// src/config/db.ts
import mongoose from "mongoose";

const URL = "mongodb://127.0.0.1:27017/inventorymanagementsystem"; // use 127.0.0.1 instead of localhost for Windows stability

async function connectDB() {
  try {
    await mongoose.connect(URL);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1); // stop server if DB fails
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("⚠️  Disconnected from MongoDB");
});

export default connectDB;
