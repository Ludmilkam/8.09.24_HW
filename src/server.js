const express = require('express')
const date = require('./script.js')
const path = require('path')
const app = express()

const HOST = '127.0.0.1' 
const PORT = 8000

app.use("/static/", express.static(path.resolve(__dirname, "./static")))

app.get("/",(req,res) => {
    console.log()
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
})

app.get("/date",(req,res) => {
    console.log(date())
    res.send(date())
})
app.listen(PORT,HOST,()=>{
    console.log("Server is running on http://127.0.0.1:8000")
})