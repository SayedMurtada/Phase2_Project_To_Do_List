
import './App.css';

import React, { Component } from 'react'
import ShowTasks from './ShowTasks';
import NewTasksForm from './NewTasksForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to To Do List</h1>
        <NewTasksForm></NewTasksForm>
        <ShowTasks></ShowTasks>
      </div>
    )
  }
}

export default App;

