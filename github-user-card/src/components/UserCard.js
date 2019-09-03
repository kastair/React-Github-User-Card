import React from 'react';
import '../App.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        console.log(this.props);
    }

    render() {
        return(
            <div className="user-card">
                <img width="150px" src={this.props.data.avatar_url} />
                <p>Username: {this.props.data.login}</p>
                <p>Name: {this.props.data.name}</p>
                <p>Followers: {this.props.data.followers}</p>
            </div>
        )
    }
}

export default UserCard;