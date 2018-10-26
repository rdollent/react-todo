const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
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
    
    handleSearch = (showCompleted, searchText) => {
        // set state
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
        // note: setState is asynchronous!
        // console.log(this.state);
    }

    render = () => {
        const {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
            
        )
    }
}

module.exports = TodoApp;