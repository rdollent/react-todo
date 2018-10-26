const React = require('react');

class TodoSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch = () => {
        // if box is checked, true. if not, false.
        const showCompleted = this.refs.showCompleted.checked;
        const searchText = this.refs.searchText.value;

        
    }
    render = () => {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    </label>
                </div>
            </div>

        )
    }

}

module.exports = TodoSearch;