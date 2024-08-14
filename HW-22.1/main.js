$(document).ready(function () {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');
    const $todoModal = $('#todoModal');
    const $todoModalText = $('#todoModalText');

    function saveToLocalStorage(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getFromLocalStorage() {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    }

    function renderTodos(todos) {
        $todosWrapper.empty();
        todos.forEach(todo => {
            const $li = $('<li></li>').addClass(`todo-item list-group-item ${todo.checked ? 'todo-item--checked' : ''}`);
            const $checkbox = $('<input type="checkbox">').prop('checked', todo.checked);
            const $span = $('<span></span>').addClass('todo-item__description').text(todo.text);
            const $button = $('<button></button>').addClass('todo-item__delete btn btn-danger').text('Видалити');

            $checkbox.on('change', function () {
                todo.checked = $checkbox.prop('checked');
                saveToLocalStorage(todos);
                renderTodos(todos);
            });

            $span.on('click', function () {
                $todoModalText.text(todo.text);
                $todoModal.modal('show');
            });

            $button.on('click', function () {
                const index = todos.indexOf(todo);
                todos.splice(index, 1);
                saveToLocalStorage(todos);
                renderTodos(todos);
            });

            $li.append($checkbox).append($span).append($button);
            $todosWrapper.append($li);
        });
    }

    $form.on('submit', function (e) {
        e.preventDefault();
        const newTodo = {
            text: $input.val(),
            checked: false
        };
        const todos = getFromLocalStorage();
        todos.push(newTodo);
        saveToLocalStorage(todos);
        renderTodos(todos);
        $input.val('');
    });

    const todos = getFromLocalStorage();
    renderTodos(todos);
});
