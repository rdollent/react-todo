var React = require('react');
var TodoList = require('TodoList');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'clean the yard'
                },
                {
                    id: 3,
                    text: 'play video games'
                },
                {
                    id: 4,
                    text: 'learn web dev'
                }
            ]
        }
    }

    render() {
        var {todos} = this.state;

        return (
            <TodoList todos={todos}/>
        )
    }
}

module.exports = TodoApp;