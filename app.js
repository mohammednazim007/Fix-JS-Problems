const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const db = mongoose.connect("mongodb://localhost/test");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send("This is the API endpoint for users");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
