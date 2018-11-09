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
        let todos = [];
        
        // try-catch
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            
        }
        
        return (Array.isArray(todos)) ? todos : [];
    },
    // take array of todos and filter, and return a subset of that array
    // if Show Completed Todos is checked i.e. completed === true in state, then
    // will only show todos that have completed === true.
    // note: todos format: [{ id: 123, text: 'hi', completed: false}];
    filterTodos: (todos, showCompleted, searchText) =>  {
        // when it fails, just return original todos array
        let filteredTodos = todos;
        
        // use Array.filter methods
        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            // items with completed === false
            // we want to show non-completed items by default
            // but if showCompleted is checked, we are going to return every single item
            // note that showCompleted is in the state
            return !todo.completed || showCompleted;
            
        });
        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            //note: array.filter tests against boolean or if
            // parameter passes a test
           if(searchText.length > 0) {
               if((todo.text.toLowerCase()).indexOf(searchText) !== -1) {
                  return true; 
               }
           } else {
               return true;
           }
        });
        
        // Sort todos with non-completed first
        // sort does not produce a new array, it modifies the existing one
        filteredTodos.sort((a,b) => {
            // refer to array.sort in mdn for example
            // we need completed false to come first or at the top of the list
            // and have all the completed be at the bottom or our todo list
            if(a.completed === false && b.completed === true) {
                return -1;
            } else if (a.completed === true && b.completed === false){
                return 1;
            } else {
                return 0;
            }
        });
        
        ////////////////////////////
        return filteredTodos;
    }
};