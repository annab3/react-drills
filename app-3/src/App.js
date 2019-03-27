import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      students: ["adam", "anna", "bryan", "carlos", "collins", "derek", "edson", "fethi", "gibbs", "jorge", "peter", "anand", "david", "neaj"]
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.setState({userInput: e.target.value})} />
        {this.state.students.filter(element => element.includes(this.state.userInput)).map(element => (<h2>{element}</h2>))}
      </div>
    );
  }
}

export default App;
