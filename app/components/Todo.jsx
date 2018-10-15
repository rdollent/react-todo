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
        var {id, text} = this.props;
        return (
            <div>
                {id}. {text}
            </div>
        )
    }
}

module.exports = Todo;