import React from 'react';
import { connect } from 'react-redux';
import { removeTask, fetchTasks } from '../store';

const Tasks = (props) => {
    const { tasks, handleClick } = props;
    console.log("TASK", props.tasks)

    return (
        <div>
            <h3 className="singleName-headings">Tasks</h3>
            {tasks.map((task, idx) => (
                <div key={idx}>
                    {task.status === 'complete' ?
                        <div >
                            <span  style={{ color: `${task.category.color.hex}` }}> &#x2613;</span>
                            <span> {task.name} </span>
                        </div> :
                        <div >
                            <span style={{ color: `${task.category.color.hex}` }}> &#x25CF;</span>
                            <span> {task.name}
                            </span><button id={task.id} onClick={handleClick}type='submit'>DELETE</button>

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
      handleClick(event){
        event.preventDefault();
        dispatch(removeTask(event.target.id));

      }
    };
  }
export default connect(mapState, mapDispatch)(Tasks);
