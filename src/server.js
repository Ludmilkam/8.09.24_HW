const express = require('express')
const date = require('./script.js')
const path = require('path')
const app = express()



const HOST = '127.0.0.1' 
const PORT = 8000

const posts = [
    {
    id:"1",
    name: 'post1',
    description:" просто пост",
    time_publicated:"сегодня",
    author: 'Author1 '
    },
    {
    id:"2",
    name: 'post2',
    description:" it`s my birthday",
    time_publicated:"29.09",
    author: 'Author2'
    }
]

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))

app.use("/static/", express.static(path.resolve(__dirname, "./static")))
app.use(express.json())

app.get("/",(req,res) => {
    console.log()
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
})

app.get("/date",(req,res) => {
    console.log(date())
    res.send(date())
})
app.get("/posts",(req,res) => {
    console.log(req.query)
    const context = {
        posts: posts.slice(0, req.query.max)
    }
    res.render("posts", context)
})
app.get("/post/:id",(req,res) => {
    const id = req.params.id
    console.log(id)
    const context = {
        post:posts[id-1],
    }

    res.render("post", context)
})
app.post("/post/create", (req,res)=>{
    console.log(req.body);
    const post = req.body
    posts.push({
        name: post.name,
        description: post.description,
        time_publicated: post.time_publicated,
        author: post.author
    })
    res.send("hello post woda")
})
app.listen(PORT,HOST,()=>{
    console.log("Server is running on http://127.0.0.1:8000")
})