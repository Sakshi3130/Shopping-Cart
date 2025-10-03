import { Router } from "express";
import { getProducts, placeOrder } from "../controllers/productController";


const router = Router();

router.get("/products", getProducts);
router.post("/order", placeOrder);

export default router;
