var markBtn = document.querySelectorAll('.mark__btn');
var deleteTodoBtn = [...document.querySelectorAll('.delete__btn')]
const todoList = document.querySelector('.todo__list');
const addTodo = document.querySelector('#add__todo');


addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = addTodo.firstElementChild.value.trim()     ;

    if(todoText !== ''){
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo');
        const todoLeft = document.createElement('div');
        todoLeft.classList.add('todo__left');
        const markBtn = document.createElement('i');
        markBtn.classList.add('far', 'fa-circle', 'mark__btn');
        const todoText = document.createElement('p');
        todoText.textContent = addTodo.firstElementChild.value;
        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('fas', 'fa-times', 'delete__btn');
        todoLeft.appendChild(markBtn);
        todoLeft.appendChild(todoText);
        todoItem.appendChild(todoLeft);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        addTodo.firstElementChild.value = '';
        todoList.append(todoItem);

        markBtn.addEventListener('click', () => {
            const todo = markBtn.parentNode.parentNode;
            const todoLeft = markBtn.parentNode;
            todo.classList.toggle('completed');
            if(todo.classList.contains('completed')) {
                todoLeft.lastElementChild.classList.add('completed__todo');
                markBtn.className = 'fas fa-check-circle mark__btn marked__color';
            } else {
                todoLeft.lastElementChild.classList.remove('completed__todo');
                markBtn.className = 'far fa-circle mark__btn';

            }

        })

        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentNode.remove();
        })
    }

})





