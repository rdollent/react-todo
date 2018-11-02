const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
// used to generate unique ids for todos
const uuid = require('node-uuid');


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                },
                {
                    id: uuid(),
                    text: 'clean the yard'
                },
                {
                    id: uuid(),
                    text: 'play video games'
                },
                {
                    id: uuid(),
                    text: 'learn web dev'
                }
            ]
        }
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
                    text: text
                }
            ]
        })
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