const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.get(express.json());
app.get(cors());

const connectMongo=require("./connectMongo")

connectMongo()

app.get("/hello", (req, res) => {
  res.json("hello");
});

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.json("data added");
});

app.listen(process.env.PORT, () => {
  console.log(`server running`);
});
