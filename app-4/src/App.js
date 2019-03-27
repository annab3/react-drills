import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    alert("Username: " + this.state.username + " Password: " + this.state.password);
    this.setState({username: '', password: ''})
  }
  
  render() {
    return (
      <div className="App">
        <input onChange={e => this.setState({username: e.target.value})} value={this.state.username} />
        <input onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
        <button onClick={e => this.handleClick()} >Login</button>
      </div>
    );
  }
}

export default App;
