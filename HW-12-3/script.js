document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTaskButton');

    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.classList.add('deleteButton'); 
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li); 
            });

            li.appendChild(deleteButton); 

            taskList.appendChild(li);

            newTaskInput.value = '';
        } else {
            alert('Будь ласка, введіть завдання.');
        }
    }

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('deleteButton')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        }
    });
});
