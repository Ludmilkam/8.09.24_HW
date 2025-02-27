import express, {Express, Request, Response} from 'express'
import path from 'path'
import postRouter from "./PostApp/postRouter"
import postRouterApi from "./PostApp/api/postRouterApi"
import commentRouter from "./CommentApp/commentRouter"
import userRouter from './UserApp/userRouter'
// import getCurrentDate from './static/script.js'
// создание апп после импортов
const app : Express = express()
// const date = require('./static/script.js')
import cookieParser from "cookie-parser"
import cors from "cors"
import tagRouterApi from './TagApp/api/tagRouterApi'


const HOST = '127.0.0.1' 
const PORT = 8000
// const SECRET_KEY = "ludanivchemnevinovata"


app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./templates"))

app.use("/static/", express.static(path.resolve(__dirname, "./static")))
app.use(express.json())

app.use(cookieParser())
app.use(cors({
    origin : ["http://localhost:3000"]
}))


app.use("/api/post/", postRouterApi)
app.use("/api/tag/", tagRouterApi)
app.use("/post/", postRouter)
app.use("/comment/", commentRouter)
app.use("/", userRouter)



app.get("/",(req : Request,res: Response) => {
    res.render('index')
})


// app.get("/date",(req : Request,res: Response) => {
//     console.log(date())
//     res.send(date())
// })

app.listen(PORT,HOST,()=>{
    console.log("Server is running on http://127.0.0.1:8000")
})
