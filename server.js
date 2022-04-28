const express = require("express")
const bodyParser = require("body-parser")
const greeting = require("./routes/greeting")

const server = express()
const PORT = process.env.PORT || 3000


server.use(express.json())
server.use("/greeting", greeting)

server.get("/",(req,res)=>{
    res.status(200).json({message: "APU UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
})