// імпортуємо модуль moment
const moment = require('moment')
// визначаємо дату
const getCurrentDate = function(){
    const date = moment().format("YYYY/MM/DD HH:mm:ss")
    return date
}

getCurrentDate()

module.exports = getCurrentDate