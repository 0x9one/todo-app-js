// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleclickDeleteorCheck);
document.getElementById('clearAll').addEventListener('click', hadnleClickClearAll);

// Event handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
    }
    input.value = '';
}

function handleclickDeleteorCheck(e) {
    if (e.target.name == 'checkBtn') {
        checkTodo(e);
    }

    if (e.target.name == 'deleteBtn') {
        deleteTodo(e);
    }
}

function hadnleClickClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

// Helpers 
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkBtn"><i class="fas fa-check-square"></i></button>
        <button name="deleteBtn"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);

}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function () {
        item.remove();
    });
    item.classList.add('todo-list-item-fall');
    
}