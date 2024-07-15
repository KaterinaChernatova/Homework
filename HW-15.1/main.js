document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    function saveToLocalStorage(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getFromLocalStorage() {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    }

    function renderTodos(todos) {
        todosWrapper.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.checked ? 'todo-item--checked' : ''}`;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.checked;
            checkbox.addEventListener('change', () => {
                todo.checked = checkbox.checked;
                saveToLocalStorage(todos);
                renderTodos(todos);
            });
            
            const span = document.createElement('span');
            span.className = 'todo-item__description';
            span.textContent = todo.text;
            
            const button = document.createElement('button');
            button.className = 'todo-item__delete';
            button.textContent = 'Видалити';
            button.addEventListener('click', () => {
                const index = todos.indexOf(todo);
                todos.splice(index, 1);
                saveToLocalStorage(todos);
                renderTodos(todos);
            });
            
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(button);
            todosWrapper.appendChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = {
            text: input.value,
            checked: false
        };
        const todos = getFromLocalStorage();
        todos.push(newTodo);
        saveToLocalStorage(todos);
        renderTodos(todos);
        input.value = '';
    });

    const todos = getFromLocalStorage();
    renderTodos(todos);
});
