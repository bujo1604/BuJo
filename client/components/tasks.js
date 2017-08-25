import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {greenA200} from 'material-ui/styles/colors';

import { removeTask, fetchTasks, changeTask } from '../store';


class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            edit: 'true'
        }

        this.dataChanged = this.dataChanged.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeSingle = this.handleChangeSingle.bind(this);

    }
    handleClick(user, task) {
        const userId = user.id
        return ((event) => {
            const taskId = task.id
            event.preventDefault()
            this.props.removeTask(taskId, userId)

        })
    }

    dataChanged(data) {
        console.log(data)
        const task = Object.keys(data);
        const taskId = task[0]
        const editTask = {
            name: data[task]
        }

        this.props.editTask(taskId, editTask)
    }

    handleChangeSingle(event, value) {
        // console.log('in chnage')
        return (
            this.setState(
                {
                    valueSingle: value,
                    edit: false
                }
            )
        )
    }

    render() {
        const { tasks, user, changeStatus } = this.props;
        return (
            <div className='parent-center'>
            <div className='align-left'>

                
                {tasks.map((task, idx) => (
                    <div key={idx}>
                        {task.status === 'complete' ?
                        <div>
                            <span className='event-bool' style={{ color: `${task.category.color.hex}` }}> &#x2613;   </span>
                            <span> {task.name} </span>
                        </div>
                            :
                            <div>
                            <span className='event-bool' style={{ color: `${task.category.color.hex}` }}> &#x25CF; </span> 
                            <span>{task.name} </span> 
                            <IconButton onClick={changeStatus(user, task)} tooltip="Complete"> <FontIcon className="material-icons md-10" hoverColor={greenA200} > done </FontIcon> </IconButton> 
                            </div>
                        }
                                <IconButton> <FontIcon className="material-icons md-10" hoverColor={greenA200} > mode_edit </FontIcon> </IconButton>
                                <IconButton tooltip='Migrate'> <FontIcon className="material-icons md-18" hoverColor={greenA200} > compare_arrows </FontIcon> </IconButton>
                                <IconButton onClick={this.handleClick(user, task)} > <FontIcon className="material-icons md-18" hoverColor={greenA200} > delete </FontIcon> </IconButton>

                    </div>
                ))}
            </div>
        </div>
        )
    }

}


const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => {
    return {
        editTask(taskId, editTask, userId) {
            dispatch(changeTask(taskId, editTask))
            dispatch(fetchTasks(userId))

        },
        removeTask(taskId, userId) {
            dispatch(removeTask(taskId))
            dispatch(fetchTasks(userId))
        },

        changeStatus(user, task) {
            let updatedTask = {};
            return (
                (event) => {
                    task.status === 'incomplete' ?
                        updatedTask = {
                            status: 'complete',
                        }
                        :
                        updatedTask = {
                            status: 'incomplete',
                        }

                    const taskId = task.id
                    event.preventDefault()
                    dispatch(changeTask(taskId, updatedTask, user.id))

                })


        }
    }
}

export default connect(mapState, mapDispatch)(Tasks)



// <IconMenu
// iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
// onChange={this.handleChangeSingle}
// value={this.state.valueSingle}
// >
// <MenuItem onClick={changeStatus(user, task)} value="1" primaryText='Change Status' />
// <MenuItem value="2" primaryText="Edit Task" />
// <MenuItem onClick={this.handleClick(user, task)} value="3" primaryText="Delete Task" />

// </IconMenu>
