// for setting the searchText in state
export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        //es6 syntax
        searchText
    };
};

// for adding a todo state
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        //es6 syntax
        text
    };
};

// toggleShowCompleted action generator
// type TOGGLE_SHOW_COMPLETED
export const toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };

};


//toggleTodo(id)
// type TOGGLE_TODO
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};