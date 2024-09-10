// імпортуємо модуль moment
const moment = require('moment')
// визначаємо дату
const getCurrentDate = function(){
    console.log(moment().format("YYYY/MM/DD HH:mm:ss"))
}

getCurrentDate()
