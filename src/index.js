const addTask = document.querySelector(".fa-plus");

const form = document.querySelector(".form")

addTask.addEventListener("click", ()=>{
    console.log("addpressed")
    form.classList.add(".display");
})