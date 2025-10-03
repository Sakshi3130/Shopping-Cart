import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/productRoutes";
import dotenv from "dotenv";

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "../public")));

app.use("/", productRoutes);

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
