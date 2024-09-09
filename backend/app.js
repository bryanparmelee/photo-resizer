const express = require("express");
const router = express.Router();

const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.send("Hello world from api");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
