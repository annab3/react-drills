import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      tasks: []
    }
  }
  addTask() {
    this.state.tasks = [... this.state.tasks, this.state.userInput]
    this.setState({userInput: ''})
  }
  
  render() {
    return (
      <div className="App">
        <h6>My to-do list:</h6>
        <input onChange={e => this.setState({userInput: e.target.value})} value={this.state.userInput} />
        <button onClick={() => this.addTask()} >Add</button>
        {/* {this.state.tasks.map(element => (<h2>{element}</h2>))} */}
        {/* <Todo tasks={this.state.tasks} /> */}
        {this.state.tasks.map(element => <Todo task={element} />)}
      </div>
    );
  }
}

export default App;
