// module for fetching and retrieving data
// separate from React components

// methods for localStorage object
// getTodos will return a todos array, setTodos will take a todo array

module.exports = {
    setTodos: (todos) => {
        // will get called when we add new todo or toggle a todo
        // verify that what I am getting is an array
        if(Array.isArray(todos)) {
            // localStorage can only store strings
            // takes two values - name/value. localStorage is an object
            localStorage.setItem('todos', JSON.stringify(todos));
            // return a value just to check if the if() condition succeeds
            // otherwise, it will return undefined
            return todos;
        }
    },
    getTodos: () => {
        // gets called when we start app
        const stringTodos = localStorage.getItem('todos');
        // set a default todos array that can be returned when localStorage.getItem() fails
        const todos = [];
        
        // try-catch
        try {
            
        } catch (e) {
            
        }
        
        
        
    }
};