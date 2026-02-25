const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

let cart = [];

// Get Products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add to Cart
app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart" });
});

// Get Cart
app.get("/cart", (req, res) => {
  res.json(cart);
});

// Delete from Cart
app.delete("/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);
  res.json({ message: "Item removed" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});