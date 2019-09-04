import React from 'react';
import '../App.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
        console.log(this.props);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.changeUserName(this.state.search);
        this.setState({ search: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    placeholder="search"
                    value={this.state.search}
                    onChange={this.handleChange}
                    name="search"
                />
                <button type="submit">search for a user</button>
            </form>
        )
    }
}

export default Search;