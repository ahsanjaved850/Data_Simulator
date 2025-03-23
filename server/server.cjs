const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

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
    const collection = client.db("CarsData").collection("ElectricCars");

    //entire collection from db
    app.get("/api/cars", async (req, res) => {
      const cars = await collection.find({}).toArray();
      res.json(cars);
    });

    // Get cars by Brand Name
    app.get("/api/cars/search", async (req, res) => {
      try {
        const { q } = req.query;
        const searchRegex = new RegExp(q.trim(), "i");

        const query = {
          $or: [{ Brand: searchRegex }, { Model: searchRegex }],
        };
        const cars = await collection.find(query).toArray();
        res.json(cars);
      } catch (err) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Get single car by ID
    app.get("/api/cars/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const car = await collection.findOne({ _id: new ObjectId(id) });
        if (!car) {
          return res.status(404).json({ error: "Car not found" });
        }
        res.json(car);
      } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
      }
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
