const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "Hello World! This is the backend server. You can find the frontend"
  );
});

app.get("/api/users", (req, res) => {
  res.send("Get all users from the database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
