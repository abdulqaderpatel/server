const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/', async(req, res) => {
    const {name,email,password}=req.body
    const user=new User({name,email,password})
    await user.save()
    res.json("data added")
});



mongoose
        .connect(process.env.MONGODB_CONNECT_URI)
        .then(() => {   
            app.listen(process.env.PORT, (() => {
            console.log(`server running`);
        }))
    }) 
    .catch((error) => console.log(error));