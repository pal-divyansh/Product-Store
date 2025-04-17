import express from 'express';
import dotenv from "dotenv";
import cors from "cors"; // ← 1. Import cors
import { connectDb } from '../config/db.js';
import productRoutes from "../routes/product.route.js";

dotenv.config();

const app = express();

const frontendUrl = process.env.VITE_API_URL;
app.use(cors({
  origin: ["http://localhost:5173", frontendUrl],
  credentials: true
}));

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDb();
    console.log("Server started at http://localhost:5000");
});
