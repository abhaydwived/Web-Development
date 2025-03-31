// # const express = require('express')
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"



dotenv.config()

const app = express()

app.use(cors({
  origin: process.env.BASE_URL,
  methods:["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders:['Content-Type', 'Authorization']

}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello ji...')
})

app.get('/Abhay',(req,res)=>{
  res.send("Abhay Narayan Dwivedi")
})

app.get('/Amar',(req,res)=>{
  res.send("Amar Narayan Dwivedi")
})

// console.log(process.env)

// connecting to database
db()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



