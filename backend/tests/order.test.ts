import request from "supertest";
import { app } from "../src/server";

describe("POST /order", () => {
  it("should place an order successfully with valid items", async () => {
    const res = await request(app)
      .post("/order")
      .send({
        items: [
          { id: 1, name: "Test Product", price: 100, quantity: 2 }
        ]
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "Order placed successfully!");
  });

  it("should return 400 if items is missing", async () => {
    const res = await request(app)
      .post("/order")
      .send({}); 

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Invalid request. 'items' must be an array.");
  });

  it("should return 400 if items is not an array", async () => {
    const res = await request(app)
      .post("/order")
      .send({ items: "not-an-array" });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Invalid request. 'items' must be an array.");
  });
});

