const todoForm = document.querySelector('#form-id')
const todoInput = document.querySelector(".todo-input")
const secondInput = document.querySelector('.todo-btn')
const firstDiv = document.querySelector('.div')
const newDiv = document.querySelector('edit-save-btn')
const newInput = document.querySelector('towriteinput')
const newEditBtn =document.querySelector('edit-btn')
const newSaveBtn = document.querySelector('save-btn')



todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = todoInput.value 


    const newDiv = document.createElement("div");
    newDiv.classList.add("edit-save-btn");

    const newInput = document.createElement("input");
    newInput.type='text' 
    newInput.value= task
    newInput.classList.add("towriteinput");
    newInput.setAttribute('readonly', 'readonly')
    newDiv.appendChild(newInput);

    const newEditBtn = document.createElement("button");
    newEditBtn.innerText = 'edit'
    newEditBtn.classList.add('edit-btn');
    newDiv.appendChild(newEditBtn);

    const newSaveBtn = document.createElement("button");
    newSaveBtn.innerText = 'delete'
    newSaveBtn.classList.add('save-btn');
    newDiv.appendChild(newSaveBtn);

    firstDiv.appendChild(newDiv);

    todoForm.value = '',

    newEditBtn.addEventListener('click', (e) => {
        if(newEditBtn.innerText == "edit"){
            newInput.removeAttribute('readonly');
            newEditBtn.innerText = 'save'
            
    
        } else{
            newInput.setAttribute('readonly', 'readonly');
            newEditBtn.innerText = 'edit'
            
        }
    })
    
    newSaveBtn.addEventListener('click', (e) => {
        if(newSaveBtn.innerText == 'delete'){
            firstDiv.removeChild(newDiv)
        }else{
            
        }
    })

})
