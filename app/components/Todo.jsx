var React = require('react');

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // spread operator {...todo} es6 passed down
        // which means for every todo
        // there are id and text object props in this.props
        // use es6 destructuring
        const {id, text, completed} = this.props;
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        )
    }
}

module.exports = Todo;