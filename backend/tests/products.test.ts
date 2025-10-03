// tests/products.test.ts
import request from "supertest";
import { app } from "../src/server";


describe("GET /products", () => {
  it("should return a list of products with status 200", async () => {
    const res = await request(app).get("/products");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    if (res.body.length > 0) {
      const product = res.body[0];
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("imageUrl");
    }
  });
});
