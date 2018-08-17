var todoList = {
  todos: [
    {
      todoText: `first`,
      completed: false
    },
    {
      todoText: `second`,
      completed: true
    }
  ],
  // displayTodos: function () {
  //   console.log(`My Todos:`)
  //   if (!this.todos.length) {
  //     console.log(`Your todo list is empty!`);
  //   } else {
  //     for (let i = 0; i < this.todos.length; i++) {
  //       if (this.todos[i].completed === true) {
  //         console.log(`[X] ${this.todos[i].todoText}`);
  //       } else {
  //         console.log(`[ ] ${this.todos[i].todoText}`)
  //       }
  //     }
  //   }
  // },
  displayTodos: function() {
    //REQ #1 COMPLETE W/ PROBLEMS
    //if list is empty how do i avoid repeat messages (same goes for the actual todos)
    if (!this.todos.length) {
      //create an h1
      let node = document.createElement("h3");
      //create a textNode to store our string
      let textNode = document.createTextNode(`Your todo list is currently empty`);
      //add the textNode to the node
      node.appendChild(textNode);
      //grab the todo-list id and append the node
      document.getElementById(`empty-list`).appendChild(node);
    } else {
      //loop through the array of todos
      //create an <li> for each todo text
      for (let i = 0; i < this.todos.length; i++) {
        let node = document.createElement("li");
        if (this.todos[i].completed === true) {
          let textNode = document.createTextNode(`${this.todos[i].todoText}, completed: ${this.todos[i].completed}`);
          node.appendChild(textNode);
          document.getElementById(`todo-list`).appendChild(node);
        } else {
          let textNode = document.createTextNode(
            `${this.todos[i].todoText.toUpperCase()} completed: ${this.todos[i].completed}`
          );
          node.appendChild(textNode);
          document.getElementById(`todo-list`).appendChild(node);
        }
      }
    }
  },
  addTodo: function(todoText) {
    if (todoText) {
      this.todos.push({
        todoText: todoText,
        completed: false
      });
    } else {
      console.log(`Please enter a valid todo`);
    }
    this.displayTodos();
  },
  changeTodo: function(oldTodo, newTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === oldTodo) {
        this.todos[i].todoText = newTodo;
      }
    }
    this.displayTodos();
  },
  toggleCompleted: function(completedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === completedTodo) {
        this.todos[i].completed = !this.todos[i].completed;
      }
    }
    this.displayTodos();
  },
  toggleAll: function() {
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
  deleteTodo: function(deletedTodo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].todoText === deletedTodo) {
        this.todos.splice(i, 1);
      }
    }
    this.displayTodos();
  }
};

// HANDLERS OBJECT FOR SEPARATION OF CONCERNS

const handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    console.log(`ADD TODO TEXT  ${addTodoTextInput.value}`);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    let changeTodoCurrentText = document.getElementById("changeTodoCurrentText");
    let changeTodoNewText = document.getElementById("changeTodoNewText");
    todoList.changeTodo(changeTodoCurrentText.value, changeTodoNewText.value);
    changeTodoCurrentText.value = "";
    changeTodoNewText.value = "";
  },
  deleteTodo: function() {
    let deleteTodoText = document.getElementById("deleteTodoText");
    todoList.deleteTodo(deleteTodoText.value);
    deleteTodoText.value = "";
  },
  toggleCompleted: function() {
    let completedTodoText = document.getElementById("completedTodoText");
    todoList.toggleCompleted(completedTodoText.value);
    completedTodoText.value = "";
  }
};
