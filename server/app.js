// require("dotenv").config(); // .env file ke config kora hoise!
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const User = require("./models/conn");
const app = express();
const router = require("./router");
dotenv.config({ path: "./config.env" });
require("./db/db");
const port = process.env.PORT || 8001;

// middleware 
app.use(express.json());
app.use(router);





// app listing 
app.listen(port , () => console.log("express port is 8000!"))