const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  let lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let lastDayOfMonthS = new Date(currentYear, currentMonth, lastDayOfMonth).getDay();

  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDayOfMonth; i++) {
    let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : ""
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonthS; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonthS + 1}</li>`;
  }

  currentDate.textContent = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
    
    if(currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth)
      currentYear = date.getFullYear()
      currentMonth = date.getMonth()
    } else {
      date = new Date()
    }
    
    renderCalendar();
  });
});

renderCalendar();
