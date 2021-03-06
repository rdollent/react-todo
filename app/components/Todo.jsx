const React = require('react');
const moment = require('moment');

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // spread operator {...todo} es6 passed down
        // which means for every todo
        // there are id and text object props in this.props
        // use es6 destructuring
        const {id, text, completed, createdAt, completedAt} = this.props;
        // separate todo style classes by whether or not they got completed
        const todoClassName = completed ? 'todo todo-completed' : 'todo';
        
        // createdAt is stored in unix time
        // need to convert for user
        const renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;
            
            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
                
            }
            
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
                
            </div>
        );
    }
}

module.exports = Todo;