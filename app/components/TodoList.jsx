var React = require('react');
var Todo = require('Todo');

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                // when iterating over an array in React
                // and generating multiple instances of a component
                // need to give unique key prop
                // used internally by React to keep track of component
                // we use {id} key which we set in initial prop
                // spread operator lets you spread out content of each object
                
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            })
        };
        console.log(todos);
        return (
            <div>
               {renderTodos()}
            </div>
        )
    }
}

module.exports = TodoList;