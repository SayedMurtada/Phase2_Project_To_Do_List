import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewTasksForm extends Component {
    constructor(props){
        super(props);
        this.state = {TodoTask:"Empty"}
    }
    

    AddTask = (event)=>{
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        return (
            <div className="offset-lg-5" id="SubmitForm">
                <form className="row g-3">
                    <div className="col-auto">
                        <input type="text" className="form-control" name="TodoTask" onChange={this.AddTask} placeholder="To Do"/>
                    </div>
                    <div className="col-auto">
                        <input type="button" value="Add Task" className="btn btn-primary mb-3" onClick={()=>this.props.Add(this.state.TodoTask)}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Add:(Description)=>dispatch({type:"ADD", payload: Description})
  }
}

export default connect(null, mapDispatchToProps)(NewTasksForm);

