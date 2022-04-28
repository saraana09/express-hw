const express = require("express")
const bodyParser = require("body-parser")
const greeting = require("./routes/greeting")
const tipCalculator = require("./routes/tip")

const server = express()
const PORT = process.env.PORT || 3000


server.use(express.json())
server.use("/greeting", greeting)
server.use("/tip", tipCalculator)

server.get("/",(req,res)=>{
    res.status(200).json({message: "APU UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})