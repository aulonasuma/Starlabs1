
function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };
}


function createProject(title) {
    return {
        title,
        todos: [],
        
        
        addTodo(todo) {
            this.todos.push(todo);
        },

       
        removeTodo(todoTitle) {
            this.todos = this.todos.filter(todo => todo.title !== todoTitle);
        },

        
        displayProject() {
            console.log(`Project: ${this.title}`);
            console.log('Todos:');
            this.todos.forEach(todo => {
                console.log(`- ${todo.title} (Due: ${todo.dueDate}, Priority: ${todo.priority})`);
            });
        }
    };
}


const project = createProject("My Project");


const todo1 = createTodo("Finish coding assignment", "Complete the JavaScript assignment", "2024-10-20", "High");
const todo2 = createTodo("Buy groceries", "Milk, bread, eggs", "2024-10-18", "Medium");


project.addTodo(todo1);
project.addTodo(todo2);


project.displayProject();
