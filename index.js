var todoList = {
  todos: [],
  displayTodos: function () {
    console.log(`My Todos:`)
    if (!this.todos.length) {
      console.log(`Your todo list is empty!`);
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log(`[X] ${this.todos[i].todoText}`);
        } else {
          console.log(`[ ] ${this.todos[i].todoText}`)
        }
      }
    }
  },
  addTodo: function (todoText) {
    if (todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false,
      });
    } else {
      console.log(`Please enter a valid todo`);
    }
    this.displayTodos();
  },
  changeTodo: function (oldTodo, newTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === oldTodo) {
        this.todos[i].todoText = newTodo;
      }
    }
    this.displayTodos();
  },
  toggleCompleted: function (completedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === completedTodo) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
    this.displayTodos();
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //Get number of completed todos.
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
  deleteTodo: function (deletedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === deletedTodo) {
        this.todos.splice(i, 1);
      }
    }
    this.displayTodos();
  }
}

// HANDLERS OBJECT FOR SEPARATION OF CONCERNS

const handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput")
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function () {
    let changeTodoCurrentText = document.getElementById("changeTodoCurrentText");
    let changeTodoNewText = document.getElementById("changeTodoNewText");
    todoList.changeTodo(changeTodoCurrentText.value, changeTodoNewText.value);
    changeTodoCurrentText.value = "";
    changeTodoNewText.value = "";
  },
  deleteTodo: function () {
    let deleteTodoText = document.getElementById("deleteTodoText");
    todoList.deleteTodo(deleteTodoText.value);
    deleteTodoText.value = "";
  },
  toggleCompleted: function () {
    let completedTodoText = document.getElementById("completedTodoText");
    todoList.toggleCompleted(completedTodoText.value);
    completedTodoText.value = "";
  },
  // getKeyCode: function() {
  //   //take the id
  //   let child = event.target.id;
  //   //find the parent
  //   let parent = document.getElementById(child).parentElement;
  //   console.log(parent);
  // }
}
