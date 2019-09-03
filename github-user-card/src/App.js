import React from 'react';
import axios from 'axios';

import './App.css';
import UserCard from './components/UserCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      err: ""
    }
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/kastair")
      .then(res => {
        this.setState({ data: res.data })
        console.log(res.data);
        console.log(this.state.data);
      })
      .then(err => {
        this.setState({ err: `API is currently not working, please try again later. ${err}` })
      })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Github User Card App</h1>
        </header>
        <input 
          type="text"
          value={this.state.data.login}
        />
        <UserCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
