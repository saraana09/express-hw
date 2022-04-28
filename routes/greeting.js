const express = require("express")

const greeting = express.Router()

greeting.route('/')
.get((req,res)=>{
    res.status(200).json({message: "Hello, stranger"})
})

greeting.route('/:name')
.get((req,res)=>{
    res.status(200).json({message: `Hello, ${req.params.name}`})
})




module.exports = greeting