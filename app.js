const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(<h1>Hello World!</h1>);
});

app.get("/api/users", (req, res) => {
  res.send(<h1>Get all users from the database</h1>);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
