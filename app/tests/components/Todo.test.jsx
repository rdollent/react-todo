var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    // test that the prop onToggle gets called when a todo item is clicked
    it('should call onToggle prop with id on click', () => {
        // create dummy data
       const todoData = {
           id: 199,
           text: 'write todo.test.jsx test',
           completed: true
       };
       // create dummy spy (function) to pass to a prop
       const spy = expect.createSpy();
       // check TodoList.jsx on how to render Todo component
       const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
       
       // simulate click even and check if spy was called or not
       //pull out element and simulate a click event
       let el = ReactDOM.findDOMNode(todo);
       // console.log(el);
       // el.querySelect('div') does not work because el itself is the div we need to click!!!
       TestUtils.Simulate.click(el);
       // check if spy was called with id 199
       expect(spy).toHaveBeenCalledWith(199);
     
       
       
    });


});