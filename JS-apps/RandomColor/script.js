function getRandomIntInclusive(min =0 , max = 255) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let btn = document.querySelector(".random");
let dive = document.querySelector(".color")
let textRGB = document.querySelector(".text__rgb")
let time = document.querySelector(".time")
let timeTwo = document.querySelector(".time__date")

function getNowDate() {
    let dateNow = new Date
    let minute = dateNow.getMinutes()

    if (minute < 10) {
        minute = `0${minute}`
    }

    time.innerHTML = `${dateNow.getHours()}:${minute}`

    let arrDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    let day = dateNow.getDay()

    let arrMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"] 
    let month = dateNow.getMonth()

    timeTwo.innerHTML = `${arrDay[day]}, ${dateNow.getDate()} ${arrMonth[month]}`
}

getNowDate()

setInterval(getNowDate, 1000)

btn.addEventListener('click', () => {
    let red = getRandomIntInclusive();
    let green = getRandomIntInclusive();
    let blue = getRandomIntInclusive();

    dive.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    textRGB.innerHTML = `rgb(${red}, ${green}, ${blue})`
})