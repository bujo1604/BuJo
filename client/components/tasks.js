import React from 'react';

const Tasks = (props) => {
    const { tasks } = props;
    return (
        <div>
            <h3 className="singleName-headings">Tasks</h3>
            {tasks.map((task, idx) => (
                <div key={idx}>
                    {task.status === 'complete' ?
                        <div >
                            <span style={{ color: `${task.category.color.hex}` }}> &#x25CF;</span>
                            <span> {task.name} </span>
                        </div> :
                        <div >
                            <span style={{ color: `${task.category.color.hex}` }}>  &#x2613;</span>
                            <span> {task.name}
                            </span>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Tasks;