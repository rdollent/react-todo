const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });


    it('should call onSearch with entered input text', () => {
        const spy = expect.createSpy();
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        const searchText = 'hehehe';
        todoSearch.refs.searchText.value = searchText;

        TestUtils.Simulate.change(todoSearch.refs.searchText);
        // only changed searchText, so first argument is false i.e. did not change checkbox
        expect(spy).toHaveBeenCalledWith(false, 'hehehe');

    });

    it('should call onSearch with proper checked value', () => {
        const spy = expect.createSpy();
        const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        // make checkbox true
        const showCompleted = true;
        // change rendered checkbox value (use .checked not .value because input checkbox)
        todoSearch.refs.showCompleted.checked = showCompleted;

        // simulate an on change event
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        // assertion
        // only changed checkbox (1st argument), did not change text hence empty string for 2nd argument
        // we simulated onSearch property. check function.
        expect(spy).toHaveBeenCalledWith(true, '');

    });

});