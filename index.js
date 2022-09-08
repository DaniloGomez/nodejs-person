require('dotenv')
const express = require("express")
const mongoose = require("mongoose")
require('./db')
const app = express()
const port = 7000;

app.listen(port, ()=>{console.log('Connect with the port ', port)})

console.log(process.env.MONGOBD_URI)