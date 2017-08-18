import React from 'react';
import { connect } from 'react-redux';
import { removeTask, fetchTasks, changeTask } from '../store';

const Tasks = (props) => {
    const { tasks, handleClick, user, changeStatus } = props;
    return (
        <div>
            <h3 className="singleName-headings">Tasks</h3>
            {tasks.map((task, idx) => (
                <div key={idx}>
                    {task.status === 'complete' ?
                        <div >
                            <span style={{ color: `${task.category.color.hex}` }}> &#x2613;</span>
                            <span> {task.name} </span>
                        </div> :
                        <div >
                            <span id={task.id} onClick={changeStatus(user) } style={{ color: `${task.category.color.hex}` }}> &#x25CF;</span>
                            <span> {task.name}
                            </span><button id={task.id} onClick={handleClick(user)} type='submit' >DELETE</button>

                        </div>
                    }
                </div>
            ))}
        </div>
    )

}




const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => {
    return {
        handleClick(user) {
            
            return ((event) => {

                event.preventDefault()
                dispatch(removeTask(event.target.id))
                dispatch(fetchTasks(user.id))
            }
            )
        },
        changeStatus(user) {
            //add possiblity of changing from complete to complete 
            const updatedTask = {
                status: 'complete',
            }
            
            return (
                (event) => {
                   // alert('are you sure?'); // if yes then change task
                    const taskId = event.target.id
                    event.preventDefault()
                    dispatch(changeTask(taskId, updatedTask))
                    dispatch(fetchTasks(user.id)) // needs to adjust the props recieve. componentWillRecieveProps 

                })


        }
    }
}

export default connect(mapState, mapDispatch)(Tasks)
