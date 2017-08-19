import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek'
import { removeTask, fetchTasks, changeTask } from '../store';


class Tasks extends Component {

  constructor(props) {
    super(props);
     this.state = {
           completed: false
        }

        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);

  }
  handleClick(user) {
    const userId = user.id
    return ((event) => {
        const taskId = event.target.id
        event.preventDefault()
        this.props.removeTask(taskId, userId)

    })
}

dataChanged(data){
    console.log(data)
    const task = Object.keys(data);
    const taskId = task[0]
    const editTask = {
        name: data[task]
    }

    this.props.editTask(taskId, editTask)
}

  render() {
    const { tasks, user, changeStatus } = this.props;
    return (
        <div>
            <h3 className="singleName-headings">Tasks</h3>
            {tasks.map((task, idx) => (
                <div key={idx}>
                    {task.status === 'complete' ?
                        <div >
                            <span style={{ color: `${task.category.color.hex}` }}> &#x2613;</span>
                            <RIEInput
                            id={task.id}
                            value={task.name}
                            change={this.dataChanged}
                            propName={task.id.toString()}
                            />

                        </div> :
                        <div >
                            <span id={task.id} onClick={changeStatus(user)} style={{ color: `${task.category.color.hex}` }}> &#x25CF;</span>
                            <RIEInput
                            id={task.id}
                            value={task.name}
                            change={this.dataChanged}
                            propName={task.id.toString()}
                            />

                            <button id={task.id} onClick={this.handleClick(user)} type='submit' >DELETE</button>

                        </div>
                    }

                </div>
            ))}
        </div>
    )

}

}


const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => {
    return {
        editTask(taskId, editTask, userId ){
            dispatch(changeTask(taskId, editTask))
            dispatch(fetchTasks(userId))

            },
        removeTask(taskId, userId){
             dispatch(removeTask(taskId))
             dispatch(fetchTasks(userId))
        },

        changeStatus(user) {
            //add possiblity of changing from complete to incomplete

            const updatedTask = {
                status: 'complete',
            }

            return (
                (event) => {
                   // alert('are you sure?'); // if yes then change task
                    const taskId = event.target.id
                    event.preventDefault()
                    dispatch(changeTask(taskId, updatedTask, user.id))
                    // dispatch(fetchTasks(user.id)) // needs to adjust the props recieve. componentWillRecieveProps

                })


        }
    }
}

export default connect(mapState, mapDispatch)(Tasks)
