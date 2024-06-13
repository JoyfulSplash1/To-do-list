console.log("<==== Welcome to joyful splash To-do list ====>")
const Input = document.getElementById('todoInput')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

function HandleTodo() {
    addTodo()
    console.log("Task Added")
}

function addTodo(todo) {
    let todoText = Input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoElem = document.createElement('li')
        const DeleteTodo = document.createElement('i')
        const CompletedTodo = document.createElement('i')
        DeleteTodo.innerHTML = "❌"
        CompletedTodo.innerHTML = "✅"
        if (todo && todo.completed) {
            todoElem.classList.add('completed')
        }

        todoElem.innerText = todoText

        CompletedTodo.addEventListener('click', () => {
            todoElem.classList.toggle('completed')
            updateLS()
            console.log("todo completed")
        })

        DeleteTodo.addEventListener('click', (e) => {
            e.preventDefault()
            todoElem.remove()
            DeleteTodo.remove()
            CompletedTodo.remove()
            console.log("todo deleted")
            updateLS()
        })

        todosUL.appendChild(todoElem);
        todosUL.appendChild(CompletedTodo);
        todosUL.appendChild(DeleteTodo);

        Input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoElem => {
        todos.push({
            text: todoElem.innerText,
            completed: todoElem.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}