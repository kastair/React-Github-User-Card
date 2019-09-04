import React from 'react';
import axios from 'axios';

import './App.css';
import UserCard from './components/UserCard';
import Search from './components/Search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'kastair',
      user: {},
      followers: [],
      err: ""
    }
  }

  changeUserName = (userName) => {
    this.setState({ userName });
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({ user: res.data })
        console.log(res.data);
        console.log(this.state.user);
      })
      .then(err => {
        this.setState({ err: `API is currently not working, please try again later. ${err}` })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userName !== prevState.userName) {
        this.getUser();
    }
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => this.setState({ user: res.data }))
      .then(err => {
        this.setState({ err: `API is currently not working, please try again later. ${err}` })
      })
  };

  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(res => this.setState({ followers: res }))
      .then(err => {
        this.setState({ err: `API is currently not working, please try again later. ${err}` })
      })
      console.log(this.state.followers);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Github User Card App</h1>
        </header>
        <Search changeUserName={this.changeUserName} />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
