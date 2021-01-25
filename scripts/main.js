console.log("Welcome to the main module")


const todoList = document.querySelector(".todo-list")
const mainContainer = document.getElementById("container")
const todoInput = document.querySelector("input")
// debugger

mainContainer.addEventListener("click", evt => {
  console.log("event happened", evt.target)
  if (evt.target.id === "add-todo") {
    evt.preventDefault()
    todoList.innerHTML += `<li>${todoInput.value}</li>`
  }
  else if (evt.target.id === "clear-input") {
    evt.preventDefault()
    todoInput.value = ""
  }
})
