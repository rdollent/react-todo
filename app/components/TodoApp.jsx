const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

// used to generate unique ids for todos
const uuid = require('node-uuid');

const moment = require('moment');

const TodoAPI = require('TodoAPI');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            // start app with what is stored in localStorage
            todos: TodoAPI.getTodos()
        }
    }
    
    //lifecycle method
    componentDidUpdate = () => {
        // for each time we change state,
        // this will pass the new todos to TodoAPI
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo = (text) => {
        this.setState({
            // todos will always be an array
            todos: [
                // pass in the original todo array
                ...this.state.todos,
                {
                    // use node-uuid to generate unique id
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined //we only want to set completedAt when we do handleToggle/todo.completed = true
                }
            ]
        });
    }
    
    handleSearch = (showCompleted, searchText) => {
        // set state
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
        // note: setState is asynchronous!
        // console.log(this.state);
    }

    handleToggle = (id) => {
        // go through all todos and see which matches id
        // from onToggle props
        // return an updated todos array
        const updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id) {
                // toggle completed state of todo
                // opposite of what's stored i.e. true to false, false to true
                // if identical ids
                todo.completed = !todo.completed;
                // toggles completedAt prop to either undefined or time right now
                todo.completedAt = todo.completed ? moment().unix(): undefined;
            }
                
            return todo;
        });

        // then set state
        this.setState({todos: updatedTodos});
    }

    render = () => {
        const {todos, showCompleted, searchText} = this.state;
        
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
            
        )
    }
}

module.exports = TodoApp;