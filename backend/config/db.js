const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("=================================");
    console.log("Connecting to MongoDB...");
    console.log(
      "URI:",
      process.env.MONGO_URI.replace(/\/\/(.*?):(.*?)@/, "//***:***@")
    );
    console.log("=================================");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("\n❌ MongoDB Connection Failed");
    console.error("---------------------------------");
    console.error("Name:", error.name);
    console.error("Message:", error.message);

    if (error.cause) {
      console.error("Cause:", error.cause);
    }

    console.error("---------------------------------\n");

    process.exit(1);
  }
};

module.exports = connectDB;