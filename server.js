const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

require("dotenv").config();

const PORT = process.env.port || 8070;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", ()=>{
   
console.log("mongoDb connection success!");
});


//second step

const employeeRouter = require("./routes/Employees.js");

app.use("/employee", employeeRouter)

//second step End

app.listen(PORT, ()=>{
    console.log('server up and running ');
}); 














