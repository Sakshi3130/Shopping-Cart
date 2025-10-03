import dotenv from "dotenv";

dotenv.config();

export const productList = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/laptop.jpg`,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/smartphone.jpg`,
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/headphones.jpg`,
  },
  {
    id: 4,
    name: "Chocolate",
    price: 500,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/chocolate.jpg`,
  },
  {
    id: 5,
    name: "Diary",
    price: 200,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/diary.jpg`,
  },
  {
    id: 6,
    name: "Moisturiser",
    price: 600,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/moisturiser.jpg`,
  },
  {
    id: 7,
    name: "Pen",
    price: 200,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/pen.jpg`,
  },
  {
    id: 8,
    name: "Shirt",
    price: 200,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/shirt.jpg`,
  },
  {
    id: 9,
    name: "Tea Powder",
    price: 200,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/teaPowder.jpg`,
  },
  {
    id: 10,
    name: "Water Bottle",
    price: 200,
    imageUrl: `http://localhost:${process.env.PORT}/public/products/waterBottle.jpg`,
  }
];
