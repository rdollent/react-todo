var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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

    handleAddTodo = (text) => {
        alert('new todo: ' + text);
    }

    render = () => {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
            
        )
    }
}

module.exports = TodoApp;