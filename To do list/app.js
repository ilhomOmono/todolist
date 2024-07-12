    let todos = [];

    // 1. Foydalanuvchi kiritgan ishni nomini olish
    function addTodo() {
        const todoName = document.getElementById('todoInput').value;
        if (todoName === '') return;

        // 2. Todoni object sifatida yaratish
        const todo = {
            name: todoName,
            createdAt: new Date()
        };

        // 3. Todoni arrayga joylash
        todos.push(todo);

        // 4. Arrayga joylangan todolarni HTMLga chiqarish
        displayTodos();

        // Inputni tozalash
        document.getElementById('todoInput').value = '';
    }

    function displayTodos() {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = ''; // Tozalash

        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const nameElement = document.createElement('span');
            nameElement.textContent = `Nomi: ${todo.name}`;
            
            const dateElement = document.createElement('span');
            const time = todo.createdAt;
            dateElement.textContent = `Yaratilgan vaqti: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

            todoItem.appendChild(nameElement);
            todoItem.appendChild(dateElement);

            todoList.appendChild(todoItem);
        });
    }