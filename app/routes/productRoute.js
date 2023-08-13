import express from "express";
const router = express.Router();
import { createProductController, getProductByVideoIDController, deleteProductByProductIDController, updateProductController } from "../controllers/productController.js";

router.post("/products", createProductController);
router.get("/products/:videoID", getProductByVideoIDController);
router.patch("/products/:productID", updateProductController);
router.delete("/products/:productID", deleteProductByProductIDController);

export default router;
