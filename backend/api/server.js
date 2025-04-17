import express from 'express';
import dotenv from "dotenv";
import cors from "cors"; // ← 1. Import cors
import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import path from "path"

dotenv.config();

const app = express();

const __dirname=path.resolve();

app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-url.vercel.app"],
  credentials: true
}));

app.use(express.json());

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/productStore/dist")))
}

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend/productStore","dist","index.html"))
})

app.listen(5000, () => {
    connectDb();
    console.log("Server started at http://localhost:5000");
});
