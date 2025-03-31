const fs = require('fs')
const express= require("express")
const math = require('./math')

console.log(math)

fs.writeFile('./text.txt','Hello jii',()=>{})