import Product from "../models/product.model.js";
import mongoose from "mongoose";

// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// DELETE product by ID
export const deleteProducts = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid Product ID" });
    }
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
        console.error("Error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// UPDATE product by ID
export const updateProducts = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in updating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// CREATE new product
export const createProduct = async (req, res) => {
    const product = req.body;
    try {
        const newProduct = await Product.create(product);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Create Product Error:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
