import express from "express";

import { createProduct, deleteProducts, getProducts,  updateProducts } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;