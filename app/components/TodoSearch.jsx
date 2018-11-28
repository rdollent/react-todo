const React = require('react');

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch = () => {
        // if box is checked, return value is true. if not, false.
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;

        // call prop method that gets passed down
        this.props.onSearch(showCompleted, searchText);
    }
    render = () => {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>

        )
    }

}

module.exports = TodoSearch;