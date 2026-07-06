require("dotenv").config();
const mongoose = require("mongoose");

async function test() {
  try {
    console.log("URI:", process.env.MONGO_URI.replace(/\/\/(.*?):(.*?)@/, "//***:***@"));

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ Connected Successfully");
    process.exit(0);
  } catch (err) {
    console.log("❌ Connection Failed");
    console.log("Name:", err.name);
    console.log("Message:", err.message);
    console.log("Full Error:");
    console.dir(err, { depth: null });
    process.exit(1);
  }
}

test();