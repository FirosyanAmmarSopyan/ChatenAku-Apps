const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(port, () => {
  console.log(`I love you ${port}`);
});