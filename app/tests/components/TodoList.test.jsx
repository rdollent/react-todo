var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        // create dummy todo
        var todos = [
            {
                id: 1,
                text: 'test task 1'
            },
            {
                id: 2,
                text: 'test task 2'
            }
        ];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

        // let us check how many of a given component are rendered under a separate component
        // check how many Todo components are rendered under TodoList component
        // will output an array of components
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);


        expect(todosComponents.length).toBe(todos.length);
    })

});