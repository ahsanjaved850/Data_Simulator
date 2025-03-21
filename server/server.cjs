const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

// Validate environment variables
if (!process.env.ATLAS_URI) {
  throw new Error("Missing ATLAS_URI in environment variables");
}

const app = express();
app.use(cors());

async function run() {
  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    app.get("/api/cars", async (req, res) => {
      const collection = client.db("CarsData").collection("ElectricCars");
      const cars = await collection.find({}).toArray();
      res.json(cars);
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Connection error:", err);
    process.exit(1);
  }
}

run();
