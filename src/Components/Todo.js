import React, { Component } from 'react'

 export default class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[ ],
      currentTask:''
    }
  }
  handelChange=(e)=>{
    this.setState({
      currentTask:e.target.value
    })

  }
  submitChange=()=>{
     this.setState({
      tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length+1}] ,
      currentTask:''
    })
  }
  deleteCurrent=(taskId)=>{
     let updatedState = this.state.tasks.filter((taskObj) => taskId !== taskObj.id)
    this.setState({
      tasks:updatedState
    })
  }
  render() {
    return (
        <React.Fragment>
          <div>
            <input type='text' value={this.state.currentTask} onChange={this.handelChange}/> 
            <button onClick={this.submitChange}>Submit</button>
            <ul> 
            {
            this.state.tasks.map((taskObj)=>(
              <li  key={taskObj.id}> 
              <div >
                <p>{taskObj.task}</p>
                <button onClick={() => this.deleteCurrent(taskObj.id)}>Delete</button>
              </div>
              </li>
            ))
            
           }
           </ul>
          </div>
           
        </React.Fragment>
    )
  }
}
