$(document).ready(function () {
    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $todosWrapper = $('.js--todos-wrapper');
    const $todoModal = $('#todoModal');
    const $todoModalText = $('#todoModalText');

    function fetchTodos() {
        return fetch('http://localhost:3000/api/todos')
            .then(response => response.json());
    }

    function createTodo(todo) {
        return fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(response => response.json());
    }

    function updateTodo(id, todo) {
        return fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(response => response.json());
    }

    function deleteTodo(id) {
        return fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

    function renderTodos(todos) {
        $todosWrapper.empty();
        todos.forEach(todo => {
            const $li = $('<li></li>').addClass(`todo-item list-group-item ${todo.checked ? 'todo-item--checked' : ''}`);
            const $checkbox = $('<input type="checkbox">').prop('checked', todo.checked);
            const $span = $('<span></span>').addClass('todo-item__description').text(todo.text);
            const $button = $('<button></button>').addClass('todo-item__delete btn btn-danger').text('Видалити');

            $checkbox.on('change', function () {
                updateTodo(todo._id, { checked: $checkbox.prop('checked') }).then(() => {
                    renderTodos(todos);
                });
            });

            $span.on('click', function () {
                $todoModalText.text(todo.text);
                $todoModal.modal('show');
            });

            $button.on('click', function () {
                deleteTodo(todo._id).then(() => {
                    renderTodos(todos.filter(t => t._id !== todo._id));
                });
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
        createTodo(newTodo).then(todo => {
            fetchTodos().then(renderTodos);
            $input.val('');
        });
    });

    fetchTodos().then(renderTodos);
});
