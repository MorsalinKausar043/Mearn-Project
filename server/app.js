// require("dotenv").config(); // .env file ke config kora hoise!
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
// const DB = "mongodb+srv://MorsalinKausar:Morsalin2002@cluster0.lvyry.mongodb.net/mearnstack?retryWrites=true&w=majority";
const port = process.env.PORT || 8001;

dotenv.config({path : "./config.env"});

mongoose.connect(process.env.SECRET_MONGODB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(() => console.log("mongoose connection succesfull"))
    .catch((error) => console.log(error));

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/about", (req, res) => {
    res.send("hello world this is about page!");
})

app.get("/contact", (req, res) => {
    res.send("hello world this is contact page!");
})

app.get("/login", (req, res) => {
    res.send("hello world this is login page!");
})

app.get("/signup", (req, res) => {
    res.send("hello world this is signup page!");
})


app.listen(port , () => console.log("express port is 8000"))