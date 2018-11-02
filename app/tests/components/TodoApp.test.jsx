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

});