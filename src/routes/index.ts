import { Router } from "express";
import products from "../services/products";

const router = Router();

// For creating a new product
router.use("/products", products);
export default router;
