var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
// var $ = require('jquery');


var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'sample text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        // update todos state to nothing
        todoApp.setState({
            todos: []
        });
        // pass a new todo
        todoApp.handleAddTodo(todoText);
        // we now expect it to only contain the new todo
        expect(todoApp.state.todos[0].text).toBe(todoText);


    });
    
    it('should toggle completed value when handleToggle called', () => {
        const todoData = {
            id: 11,
            text: 'test features',
            completed: false
        };
        
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        // replace your todos state with test state data
        todoApp.setState({todos: [todoData]});
       
       // check that todos first iteam has completed value of false
       expect(todoApp.state.todos[0].completed).toBe(false);
       // call handleToggle with id (11);
       todoApp.handleToggle(11);
       // verify that value changed
       expect(todoApp.state.todos[0].completed).toBe(true);
        
        
    });

});