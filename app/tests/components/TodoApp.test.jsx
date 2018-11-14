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

        // expect createdAt field to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
        
    });
    
    it('should toggle completed value when handleToggle called', () => {
        const todoData = {
            id: 11,
            text: 'test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
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
    
        // expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    
    });

    // test that when completed status is toggled from true to false, completedAt gets removed
    it('should remove completedAt when completed is false', () => {
        const todoData = {
            id: 11,
            text: 'test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        // replace your todos state with test state data
        todoApp.setState({todos: [todoData]});
       
        // check that todos first iteam has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle with id (11);
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
    
        // expect completedAt to be undefined
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});