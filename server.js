const express = require("express")
const bodyParser = require("body-parser")
const greeting = require("./routes/greeting")
const tipCalculator = require("./routes/tip")
const magic = require("./routes/magic")

const server = express()
const PORT = process.env.PORT || 3000


server.use(express.json())
server.use("/greeting", greeting)
server.use("/tip", tipCalculator)
server.use("/magic", magic)

server.get("/",(req,res)=>{
    res.status(200).json({message: "API UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})