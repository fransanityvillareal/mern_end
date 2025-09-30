import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import student_routes from "./routes/student_routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleman
app.use(cors());
app.use(express.json());

app.use("/api/students", student_routes)



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  //node server js