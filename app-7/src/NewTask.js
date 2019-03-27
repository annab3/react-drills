import React, {Component} from 'react';
import Todo from './Todo';

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
  }
  addTask() {
    this.props.handleAdd(this.state.userInput)
    this.setState({userInput: ''})
  }

  render(){
    return (
      <div>
        <input onChange={e => this.setState({userInput: e.target.value})} value={this.state.userInput} />
        <button onClick={() => this.addTask()} >Add</button>
        
      </div>
    );
  }
}

  export default NewTask;