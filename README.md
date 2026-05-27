# 📦 Simple Inventory & Order Management API

Welcome! This is a simple backend API written in **TypeScript** using **Express** (to handle web requests) and **Prisma** (to talk to a PostgreSQL database). 

It helps you:
1. Create **Users**
2. Create and list **Products** in your catalog
3. Create **Orders** (which automatically checks stock and updates inventory!)

---

## 🚀 How to Run the Project (Step-by-Step)

### Step 1: Install dependencies
Open your terminal inside this project folder and run:
```bash
npm install
```

### Step 2: Set up your configuration
1. Open the `.env` file in the root folder of this project.
2. Update the `DATABASE_URL` line with your PostgreSQL credentials:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/inventory_db"
   PORT=3000
   ```

### Step 3: Setup database tables
Run the command below. Prisma will read the schema file and create all the tables in your database automatically:
```bash
npx prisma migrate dev --name init
```

### Step 4: Run the server
Start the application in development mode:
```bash
npm run dev
```
You should see: `server running on port 3000`.

---

## 📂 Project Folder Guide

Here is a simple explanation of where to find things:

- [src/app.ts](file:///c:/typescript_project/inventory-management/src/app.ts) - **The entry point**: Starts the server and registers the routes.
- [src/routes/](file:///c:/typescript_project/inventory-management/src/routes) - **The routes**: Defines URLs (like `/products`, `/order`) that clients can call.
- [src/controllers/](file:///c:/typescript_project/inventory-management/src/controllers) - **The controllers**: Receives request inputs, handles errors, and sends back the final response (JSON).
- [src/services/](file:///c:/typescript_project/inventory-management/src/services) - **The business logic (The Brain)**: Calculates order prices, checks if enough stock is available, and coordinates logic.
- [src/repositories/](file:///c:/typescript_project/inventory-management/src/repositories) - **The database helpers**: Directly reads from and writes to the database using Prisma.
- [src/modles/](file:///c:/typescript_project/inventory-management/src/modles) - **Types & interfaces**: Spelled `modles` in this codebase. Defines what the data objects look like.
- [prisma/schema.prisma](file:///c:/typescript_project/inventory-management/prisma/schema.prisma) - **Database blueprint**: Describes the database tables (models).

---

## 🗄️ Database Tables (Models)

- **User**: Represents customers or administrators. Has `id`, `name`, `email`, `password`, and `role`.
- **Product**: Represents items you sell. Has `id`, `name`, `price`, and `stock` (quantity).
- **Order**: Created when a User buys a Product. Has `productId`, `userId`, `quantity`, and a `totalPrice` (calculated automatically).

---

## 🔌 API Endpoints (How to use it)

You can use tools like **Postman**, **Thunder Client**, or **curl** to test these.

### 👤 Users

#### Create a User
- **Method**: `POST`
- **URL**: `http://localhost:3000/user`
- **Body (JSON)**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "password": "securepassword123",
    "role": "customer"
  }
  ```

---

### 📦 Products

#### Create a Product
- **Method**: `POST`
- **URL**: `http://localhost:3000/products`
- **Body (JSON)**:
  ```json
  {
    "name": "Wireless Mouse",
    "price": 29.99,
    "stock": 100
  }
  ```

#### Get All Products
- **Method**: `GET`
- **URL**: `http://localhost:3000/products`

---

### 🛒 Orders

#### Create an Order (Automatically updates stock!)
- **Method**: `POST`
- **URL**: `http://localhost:3000/order`
- **Body (JSON)**:
  ```json
  {
    "productId": 1,
    "userId": 1,
    "quantity": 5
  }
  ```
  *(This will buy 5 units of product #1, check if stock is sufficient, decrease product stock by 5, calculate total price, and save the order.)*

#### Get All Orders (With User and Product info)
- **Method**: `GET`
- **URL**: `http://localhost:3000/orders`
