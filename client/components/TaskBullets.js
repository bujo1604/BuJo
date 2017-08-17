import React from 'react';

const TaskBullets = (props) => {
    const { tasks, day } = props;
    return (
        <div>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>{task.status === 'complete' ?
                        
                            <div key={idx} style={{ color: `${task.category.color.hex}`}} display="inline"> &#x25CF;</div>
                          :
                        
                            <div key={idx} style={{ color: `${task.category.color.hex}` }} display="inline">  &#x2613;</div>
                    }
                </div>
            ))}
        </div>
    )
}

export default TaskBullets;