import React from 'react';
import '../App.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="user-card">
                <img width="150px" src={this.props.user.avatar_url} alt="user" />
                <p>Username: {this.props.user.login}</p>
                <p>Name: {this.props.user.name}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Follower List:</p>
                <div className="followers-list">
                    {this.props.followers.map(follower => (
                        <div key={follower.id}>{follower.login}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserCard;