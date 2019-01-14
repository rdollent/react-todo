const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    // test setSearchText function
    it('should generate search text action', () => {
        // for action generator
        // create completed action first
        const action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };

        // call generator
        const res = actions.setSearchText(action.searchText);

        // assert that the two should be the same
        expect(res).toEqual(action);

    });

    it('should generate add todo action', () => {
        // create what the final action should look like
        const action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };

        // call the generator in actions.jsx
        // should return an action object
        const res = actions.addTodo(action.text);

        // assert that the two should be the same
        expect(res).toEqual(action);
    });

    it('should generate completed toggle show action', () => {
       // create resulting action
       const action = {
           type: 'TOGGLE_SHOW_COMPLETED'
       };
       
       // call generator and put into variable
       const res = actions.toggleShowCompleted();

       // assert equality for the test to pass
       expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        // create action that we should get as result
        const action = {
            type: 'TOGGLE_TODO',
            id: 123456
        };

        // call generator
        const res = actions.toggleTodo(action.id);

        // assert equality
        expect(res).toEqual(action);

    });
});