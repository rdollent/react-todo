const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();

    });

    it('should call on onAddTodo if valid data is submitted', () => {
        let spy = expect.createSpy();
        let todoText = 'test';
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

        // finds the addtodo component in the DOM without jquery
        let el = ReactDOM.findDOMNode(addTodo);
        // console.log(el);
        // simulate text in text input inside form
        addTodo.refs.todo.value = todoText;
        // console.log(el.querySelector('form'));
        // simulate submitting the form
        TestUtils.Simulate.submit(el.querySelector('form'));

        expect(spy).toHaveBeenCalled(todoText);

    });

    it('should NOT call on onAddTodo if INvalid data is submitted', () => {
        let spy = expect.createSpy();

        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

        // finds the addtodo component in the DOM without jquery
        let el = ReactDOM.findDOMNode(addTodo);
        // console.log(el);
        // simulate text in text input inside form
        addTodo.refs.todo.value = '';
        // console.log(el.querySelector('form'));
        // simulate submitting the form
        TestUtils.Simulate.submit(el.querySelector('form'));

        expect(spy).toNotHaveBeenCalled();

    });
    

});