const STORAGE_KEY = "TODO_APPS"

let todos = []

function isStorageExist() {
	return typeof(Storage) == undefined? false: true
}

function saveData() {
	const parsed = JSON.stringify(todos)
	localStorage.setItem(STORAGE_KEY, parsed)
	document.dispatchEvent(new Event("onDataSaved"))
}

function refreshDataFromTodos() {
	const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID)
	let listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID)

	for(todo of todos){
		const newTodo = makeTodo(todo.task, todo.timestamp, todo.isCompleted)
		newTodo[TODO_ITEMID] = todo.id

		if (todo.isCompleted) {
			listCompleted.append(newTodo)
		}else{
			listUncompleted.append(newTodo)
		}
	}
}

function loadDataFromStorage() {
	const serializeData = localStorage.getItem(STORAGE_KEY)

	let data = JSON.parse(serializeData)

	if (data) {
		todos = data
	}

	document.dispatchEvent(new Event("onDataLoaded"))
}

function updateDataToStorage() {
	isStorageExist()? saveData() : ''
}

function composeTodoObject(task, timestamp, isCompleted) {
	return {id: +new Date(), task, timestamp, isCompleted}
}

function findTodo(todoId) {
	for(todo of todos){
		if (todo.id == todoId) {
			return todo
		}
	}
	return null
}

function findTodoIndex(todoId) {
	let index = 0
	for(todo of todos){
		if (todo.id == todoId) {
			return index
		}
		index++
	}
	return -1
}