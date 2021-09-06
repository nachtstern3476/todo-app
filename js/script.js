document.addEventListener("DOMContentLoaded", function(){
	const submitForm = document.getElementById("form")
	submitForm.addEventListener("submit", function(e){
		e.preventDefault()
		addTodo()
	})

	if (isStorageExist()) {
		loadDataFromStorage()
	}
})

document.addEventListener("onDataSaved", ()=>{
	console.log("Data berhasil disimpan")
})

document.addEventListener("onDataLoaded", ()=>{
	refreshDataFromTodos()
})