import React from 'react';

const TaskBullets = (props) => {
    const { tasks, day } = props;
    return (
        <div>
            {tasks.map((task, idx) => (
<<<<<<< HEAD
                    <span  key={idx}>{task.status === 'complete' ?

                            <span key={idx}  style={{ color: `${task.category.color.hex}`}} > &#x2613;</span>
                          :

                            <span key={idx}  style={{ color: `${task.category.color.hex}` }}>  &#x25CF;</span>
=======
                    <span display="inline" key={idx}>{task.status === 'complete' ?

                            <span key={idx} style={{ color: `${task.category.color.hex}`}} display="inline"> &#x2613;</span>
                          :

                            <span key={idx} style={{ color: `${task.category.color.hex}` }} display="inline">  &#x25CF;</span>
>>>>>>> 9070e061fa868c3d33cdeda0c856439c16407bda
                    }
                </span>
            ))}
        </div>
    )
}

export default TaskBullets;
