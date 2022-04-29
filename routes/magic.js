const express = require("express")
const responses = ["It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good","Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"]
const querystring = require('querystring')
const answer = ""


const magic = express.Router()

magic.route('/')
.get((req,res)=>{
    res.status(200).json({message: "Ask your question."})
})

magic.route('/:querystring')
.get((req,res)=>{
    res.status(200).json({message: `you asked ${req.params.querystring}`})
})



module.exports = magic