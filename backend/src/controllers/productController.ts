import type { Request, Response } from "express";
import { productList } from "../constants";

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json(productList);
};

export const placeOrder = (req: Request, res: Response) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ message: "Invalid request. 'items' must be an array." });
  }

  console.log("Received Order:", items);

  res.status(201).json({ message: "Order placed successfully!" });
};
