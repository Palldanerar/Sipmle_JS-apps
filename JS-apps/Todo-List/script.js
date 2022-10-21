let addTask = document.querySelector('.btn')
let todo = document.querySelector('.todo')

function getEvent() {
    let task = document.querySelectorAll('.task')

    task.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle("task")
        item.classList.toggle("task__complite")
    }))
}

getEvent()

addTask.addEventListener('click', () => {
    let newTask = document.querySelector('.inputTask').value
    todo.innerHTML += `<li class="task">${newTask}</li>`
    getEvent()
})

