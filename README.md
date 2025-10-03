# 🛒 Shopping Cart Project

A simple **full-stack shopping cart application** with:

* **Frontend:** React + TypeScript + TailwindCSS (Vite)
* **Backend:** Node.js + Express + TypeScript
* **Database:** (mocked in memory for now)
* **Tests:** Jest + Supertest

---

## 🚀 Features

* Browse products in a responsive grid.
* Add products to a cart with quantity selectors.
* View cart in a modal with total calculation.
* Checkout simulation (sends cart data to backend).
* Notifications for cart and checkout actions.
* Backend API with `/products` and `/order` endpoints.
* Jest + Supertest test cases for backend.

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sakshi3130/Shopping-Cart.git
cd shopping-cart
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8000
NODE_ENV=development
```

For testing:

```env
# .env.test
PORT=0
NODE_ENV=test
```

Run backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧪 Running Tests

From the **backend folder**:

```bash
npm test
```

---

## 📌 Assumptions & Design Choices

1. Products are mock data stored in-memory.
2. Cart is managed client-side with `localStorage` and synced via React context.
3. Notifications use Tailwind animations (no external UI libs).
4. Tests use `supertest` to hit Express routes without starting a server.
5. `.env.test` ensures isolated test configuration.

---
