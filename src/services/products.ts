import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

// For creating a new product
router.post("/products", async (req, res) => {
    try {
        const productData = req.body;
        const data = await prisma.products.create(productData);
        res.json({
            success: true,
            message: "Product created successfully",
            data,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            success: false,
            message: "Error creating product",
            data: error,
        });
    }
});

export default router;
