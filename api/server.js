const express = require("express");
var app = express();
var cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected!"));

app.get('/',(req,res)=>{
  
})




app.listen(4000)