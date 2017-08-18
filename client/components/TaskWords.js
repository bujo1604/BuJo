import React from 'react';

const TaskWords = (props) => {
    const { tasks } = props;
    
    return (
        <div>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>
                        
                            <div key={idx} style={{ color: `${task.category.color.hex}`}} display="inline">{task.name}</div>
                </div>
            ))}
        </div>
    )
}

export default TaskWords;