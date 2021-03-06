const express = require("express");
// const db = require("./database");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi from server");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
