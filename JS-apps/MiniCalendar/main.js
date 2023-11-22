const date = document.querySelector(".date")
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")

const right = document.querySelector(".right")
const website = document.querySelector(".website")

const today = new Date()

const todayMonth = today.getMonth()


const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
const daysWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

date.textContent = today.getDate()
day.textContent = daysWeek[today.getDay()] 
month.textContent = months[today.getMonth()]
year.textContent = today.getFullYear()


if (todayMonth == 0 || todayMonth == 1 || todayMonth == 11) {
    right.style.background = "#739dcd"
    website.style.background = "linear-gradient(71deg, rgba(46,183,244,1) 0%, rgba(255,255,255,1) 100%)"
}

if (todayMonth == 2 || todayMonth == 3 || todayMonth == 4) {
    right.style.background = "#5a9d2d"
    website.style.background = "linear-gradient(71deg, rgba(86,246,64,1) 0%, rgba(255,255,255,1) 100%)"
}

if (todayMonth == 5 || todayMonth == 6 || todayMonth == 7) {
    right.style.background = "#F7C815"
    website.style.background = "linear-gradient(71deg, rgba(248,255,72,1) 0%, rgba(255,255,255,1) 100%)"
}


if (todayMonth == 8 || todayMonth == 9 || todayMonth == 10) {
    right.style.background = "#D67F54"
    website.style.background = "linear-gradient(71deg, rgba(244,165,46,1) 0%, rgba(255,255,255,1) 100%)"
}