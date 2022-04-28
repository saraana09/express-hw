const express = require("express")

const tipCalculator = express.Router()

tipCalculator.route('/')
.get((req,res)=>{
    res.status(200).json({message: "How much to tip?"})
})

tipCalculator.route('/:total/:tipPercentage')
.get((req,res)=>{
    res.status(200).json({message: `You should tip , ${req.params.total*req.params.tipPercentage/100}`})
})




module.exports = tipCalculator