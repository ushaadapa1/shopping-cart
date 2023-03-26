const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample products data
let products = [
  { id: 1, name: "Product 1", price: 10.99, sellerType: "seller" },
  { id: 2, name: "Product 2", price: 19.99, sellerType: "seller" },
  { id: 3, name: "Product 3", price: 8.49, sellerType: "buyer" }
];

// DELETE API to delete product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Check if sellerType is 'seller'
  const productIndex = products.findIndex(product => product.id === productId);
  if (productIndex === -1) {
    return res.status(404).
  }
