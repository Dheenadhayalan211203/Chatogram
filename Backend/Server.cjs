const express=require('express');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json())
const PORT = 3000;
require("dotenv").config();


const MONGODB_URI="mongodb+srv://Dheena:dheena@cluster0.ser6ewc.mongodb.net/chatogram?retryWrites=true&w=majority&appName=Cluster0"

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    mailid:String,
    password:String,
    confirmpassword:String,
    name:String,
    phone:String

  });
  
  const User = mongoose.model("user", userSchema);

  app.post("/signup",async (req,res)=>{
    const mailid=req.body.mailid
    const password=req.body.mailid
    const confirmpassword=req.body.confirmpassword
    const name=req.body.name
    const phone=req.body.phone
    const user=new User({mailid,password,confirmpassword,name,phone})
    const usern=await User.findOne({mailid:mailid})
    if(usern){
        res.send("user already exists")
    }
    else
    {
        User.insertOne(user)
    }

  })

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
