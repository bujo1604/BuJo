import React from 'react';
import { connect } from 'react-redux';
import { removeTask, fetchTasks } from '../store';

const Tasks = (props) => {
    const {tasks, handleClick, user} = props;
    return (
        <div>
        <h3 className="singleName-headings">Tasks</h3>
        {tasks.map((task, idx) => (
            <div key={idx}>
                {task.status === 'complete' ?
                    <div >
                        <span  style={{ color: `${task.category.color.hex}` }}> &#x2613;</span>
                        <span> {task.name} </span><button >update</button>
                    </div> :
                    <div >
                        <span style={{ color: `${task.category.color.hex}` }}> &#x25CF;</span>
                        <span> {task.name}
                        </span><button id={task.id}  onClick={  handleClick(user) } type='submit' >delete</button>
                        <button >update</button>

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
        handleClick(user){

            return ( (event) => {
                event.preventDefault()
            dispatch(removeTask(event.target.id))
            dispatch(fetchTasks(user.id))

            }
            )
        }
    }
}

export default connect(mapState, mapDispatch)(Tasks)
