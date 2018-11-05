const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    // mocha method, gets called before every test
    beforeEach(() => {
        // clean out localStorage, otherwise 
        // test using invalid array will fail because first test puts a valid array in localStorage of browser
        localStorage.removeItem('todos');
    });
    
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    // describe block for setTodo
    describe('setTodos', () => {
        
        
        it('should set valid todos array', () => {
            // create test todos array
            const todos = [{
               id: 23,
               text: 'test all files',
               completed: false
           }];
           
           // call setTodos method, which will call localStorage.setItem()
           TodoAPI.setTodos(todos);
           
           // localStorage.setItem() uses JSON.stringify() to store todos
           // because localStorage can only store data in strings
           // thus, we need to JSON.parse() the todo when using localStorage.getItem();
           // actualTodos is ideal result to be able to work on todos from localStorage
           const actualTodos = JSON.parse(localStorage.getItem('todos'));
           
           // when using object or arrays, better to use toEqual() over toBe();
           // toBe() checks if they're the same exact thing in memory
           // toEqual() compares the values
           expect(actualTodos).toEqual(todos);
           
        });
        
        // test when passing invalid todos array
        it('should not set invalid todos array', () => {
           const badTodos = {a: 'b'};  //create a bad example, like object which is not an array
           TodoAPI.setTodos(badTodos);
           
           // localStorage won't be set
           expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        // test with no data stored or invalid data
        // chech getTodos() method in TodoAPI.jsx
        // if invalid, it will regress back to todos = [] which was declared first
        it('should return empty array for bad localStorage data', () => {
            const actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });
        
        it('should return todos if valid array in localStorage', () => {
            // create test todos array
            const todos = [{
               id: 23,
               text: 'test all files',
               completed: false
           }];
           
           // since getTodos() has localStorage.getItem() inside it, we need to first
           // set a valid todos inside localStorage (since we clear out localStorage before every test)
           localStorage.setItem(JSON.stringify(todos));
           
           const actualTodos = TodoAPI.getTodos();
           // note that JSON result from getTodos is already parsed
           expect(actualTodos).toEqual(todos);
        })

    });
    
    describe('filterTodos', () => {
        
    })

})