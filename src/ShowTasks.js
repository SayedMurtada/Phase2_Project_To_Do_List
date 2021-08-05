import React, { Component } from 'react'
import { connect } from 'react-redux'; 

class ShowTasks extends Component {
    constructor(props){
        super(props);
        this.state = {hide:true, how:true, updatepage:false, option:["Complete", "Not Complete"]}
    }

    StatusChangeHandler = (event) =>{
        this.setState({updatepage:!this.state.updatepage});
        console.log(event.target.value);
        let CurrentSelectId = event.target.id;
        let CurrentSelectValue = event.target.value;
        this.props.Edit(CurrentSelectId, CurrentSelectValue);
        // this.forceUpdate();
        
    }

    RemoveHandler = (event) =>{
        this.setState({updatepage:!this.state.updatepage});
        let CurrentSelectId = event.target.id;
        console.log("this is the removed id");
        console.log(CurrentSelectId);
        this.props.Remove(CurrentSelectId);
    }
    updatelist = (event)=>{
        this.setState({updatepage:!this.state.updatepage})
    }

    render() {
        return (
            <div>
                <label>Please click the update button after adding the new tasks to see them</label>
                <br/>
                <input type="button"  className="btn btn-primary mb-3" value="Update List" onClick={this.updatelist}/>
                <ul className="list-group align-items-center">
                { 
                this.props.GlobalTasks.map( (d, i) => (
                                            <li className='list-group-item' key = {i}>
                                                <form className=''>
                                                    <div className="row g-2">
                                                        <div className="col-auto">
                                                            <h3>{i}</h3>
                                                        </div>
                                                        <div className="col-auto">
                                                            <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" placeholder={d.Description}/>
                                                        </div>
                                                    </div>
                                                    <div className="row"> 
                                                        <div className="col-auto"> 
                                                         <h5>Status: {d.Status}</h5>
                                                        </div>
                                                        {d.Status == "Not Complete" && (
                                                            <div className="col-auto">
                                                            <input type="button" id={i} className="btn btn-primary mb-3" value="Complete" onClick={this.StatusChangeHandler}/>
                                                            </div>
                                                                                        )
                                                         }
                                                        { d.Status == "Complete" && (
                                                                                <div className="col-auto">
                                                                                    <input type="button" id={i} className="btn btn-primary mb-3" value="Remove" onClick={this.RemoveHandler}/>
                                                                                </div>
                                                                            )
                                                        }
                                                        
                                                    </div>
                                                </form>
                                            </li>
                                                    )          
                                                )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("this is Map State:");
    console.log(state);
    return{
        GlobalTasks:state.SavedTasks
      }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Remove:(TaskId)=>dispatch({type:"REMOVE",payload:TaskId}),
        Edit:(id, status)=>dispatch({type:"EDIT",payload:[id,status]})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTasks)