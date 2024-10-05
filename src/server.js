const express = require('express')
const date = require('./script.js')
const path = require('path')
const app = express()

const postRouter = require("./routers/postRouter")

const HOST = '127.0.0.1' 
const PORT = 8000



app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))

app.use("/static/", express.static(path.resolve(__dirname, "./static")))
app.use(express.json())

app.use("/post/", postRouter)


app.get("/",(req,res) => {
    res.render('index')
})

// app.get("/date",(req,res) => {
// })
// app.get("/posts",(req,res) => {
//     res.render("posts")
// })
// app.get("/post/:id",(req,res) => {
//     const id = req.params.id
//     console.log(id)
//     const context = {
//         post:posts[id-1],
//     }

//     res.render("post")
// })

app.listen(PORT,HOST,()=>{
    console.log("Server is running on http://127.0.0.1:8000")
})