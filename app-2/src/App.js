import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: ["Adam", "Anna", "Bryan", "Carlos", "Collins", "Derek", "Edson", "Fethi", "Gibbs", "Jorge", "Peter", "Anand", "David", "Neaj"]
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.students.map(function(element) {
          return <h2>{element}</h2>
          })
        }

      </div>
    );
  }
}

export default App;
