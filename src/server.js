"use strict";
// const express = require('express')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require('path')
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const postRouter_1 = __importDefault(require("./PostApp/postRouter"));
const userRouter_1 = __importDefault(require("./UserApp/userRouter"));
// import getCurrentDate from './static/script.js'
const app = (0, express_1.default)();
// const date = require('./static/script.js')
// const postRouter = require("./routers/postRouter")
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const HOST = '127.0.0.1';
const PORT = 8000;
// const SECRET_KEY = "ludanivchemnevinovata"
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve(__dirname, "./templates"));
app.use("/static/", express_1.default.static(path_1.default.resolve(__dirname, "./static")));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/post/", postRouter_1.default);
app.use("/", userRouter_1.default);
app.get("/", (req, res) => {
    res.render('index');
});
// app.get("/date",(req : Request,res: Response) => {
//     console.log(date())
//     res.send(date())
// })
app.listen(PORT, HOST, () => {
    console.log("Server is running on http://127.0.0.1:8000");
});
