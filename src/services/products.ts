import { Router } from "express";
import prisma from "../lib/prisma";

const router = Router();

// For creating a new product
router.post("/", async (req, res) => {
    try {
        const productData = req.body;
        if (
            !productData?.title ||
            productData.price === undefined ||
            productData.stock === undefined
        ) {
            res.status(400).json({
                success: false,
                message: "title, price, and stock are required",
            });
            return;
        }

        const data = await prisma.products.create({ data: productData });
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
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});

export default router;
