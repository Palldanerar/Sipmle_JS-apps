let task = document.querySelectorAll('.task')
let addTask = document.querySelector('.btn')


task.forEach(item => item.addEventListener('click', () => {
    item.classList.toggle("task")
    item.classList.toggle("task__complite")
}))
