import mongoose from "mongoose";
import express from "express";

// const credentialSchema = require("./models/login_cred.js");
// import { cred } from "./models/login_cred.js";
// const validate = require("./models/middlewares/validators-middle.js");

import { credentialSchema } from "./models/login_cred.js";
import { validate } from "./models/middlewares/validators-middle.js";

let conn = await mongoose.connect("mongodb://localhost:27017/signup");
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const person = signup.findOne({email : ""});
  if (person){
    if (person.password == ""){
        res.sendFile("./signup.html");
    }
  } 
  else{
    res.sendFile("./login.html");
  } 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})