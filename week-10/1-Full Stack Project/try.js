// # const express = require('express')
import express from "express"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app = express()



const port = process.env.port || 4000

app.get('/', (req, res) => {
  res.send('Hello jii!')
})

app.get('/Abhay',(req,res)=>{
    res.send("Abhay Narayan Dwivedi")
})

app.get('/Amar',(req,res)=>{
    res.send("Amar Narayan Dwivedi")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

