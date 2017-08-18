import React from 'react';

const TaskWords = (props) => {
    const { tasks } = props;
    console.log(tasks, "tasks in TaskWords ")
    return (
        <div>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>{task.status === 'complete' ?
                        
                            <div key={idx} style={{ color: `${task.category.color.hex}`}} display="inline">{task.name}</div>
                         
                            :
                        
                            <div key={idx} style={{ color: `${task.category.color.hex}` }} display="inline">{task.name}</div>
                    }
                </div>
            ))}
        </div>
    )
}

export default TaskWords;