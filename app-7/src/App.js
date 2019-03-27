import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from './List';
import NewTask from './NewTask'
import Todo from './Todo'

class App extends Component {
  constructor() {
    super();
    this.state ={
      tasks: []
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(task) {
    this.setState({tasks: [... this.state.tasks, task]})
  }
  
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask handleAdd={this.handleAdd}/>
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
