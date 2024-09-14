const express = require('express')
const date = require('./script.js')
const app = express()

const HOST = '127.0.0.1' 
const PORT = 8000
// у приложения express есть метод get, отвечающий за обработку get запроса
// 1 аргументом принимается ссылка запроса
// 2 аргументом принимается callback функция в которую можно передать 2 аргумента
// их можно записать в переменную req - request(информация о запросе) и
// res - response(для формирования ответа)
app.get("/",(req,res) => {
    console.log(date())
    // для того чтобы сделать ответ используем объект res и метод send
    res.send(date())
})
app.listen(PORT,HOST,()=>{
    console.log("Server is running on http://127.0.0.1:8000")
})