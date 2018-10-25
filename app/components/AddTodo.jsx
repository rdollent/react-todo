var React = require('react');

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onAddTodo} = this.props;
        const todo = this.refs.todo.value;
        if(todo.length > 0) {
            this.refs.todo.value = '';
            onAddTodo(todo);
        } else {
            this.refs.todo.focus();
        }
       
    }

    render = () => {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="todo"/>
                <button className="button expanded">Add Todo</button>
            </form>
            </div>
        )
    }

}

module.exports = AddTodo;