const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample users data
let users = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 40 }
];

// PUT API to update user details
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  // Find user by ID
  const user = users.find(user => user.id === id);

  // If user not found, return 404
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update user details
  if (name) user.name = name;
  if (email) user.email = email;
  if (age) user.age = age;

  // Return updated user
  res.json(user);
});

// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
