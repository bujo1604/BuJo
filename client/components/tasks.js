import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RIEInput } from 'riek'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { removeTask, fetchTasks, changeTask } from '../store';


class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            edit: false
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
        this.setState({edit: false})
    }

    handleChangeSingle(event, value) {
        // console.log('in chnage')
        return (
            this.setState(
                {
                    valueSingle: value,
                    edit: "true"
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
                            <span className='event' style={{ color: `${task.category.color.hex}` }}> &#x2613; </span>
                            :
                            <span className='event' id={task.id} onClick={changeStatus(user)} style={{ color: `${task.category.color.hex}` }}> &#x25CF; </span>
                        }
                        {(this.state.edit) ?
                            (

                                <span className='event-bool'> {task.name}  </span>

                            ) :
                            (
                             
                                    
                                    <span className='event-bool'>
                                        <RIEInput
                                            id={task.id}
                                            value={task.name}
                                            change={this.dataChanged}
                                            propName={task.id.toString()}
                                        />
                                    </span>
                              

                            )

                        }
                        
                            <IconMenu
                                iconButtonElement={<IconButton ><MoreVertIcon className='rotate' /></IconButton>}
                                onChange={this.handleChangeSingle}
                                value={this.state.valueSingle}
                            >
                                <MenuItem onClick={changeStatus(user, task)} value="1" primaryText='Change Status' />
                                <MenuItem onClick={changeStatus(user, task)} value="2" primaryText='Migrate Task' />
                                <MenuItem value="2" primaryText="Edit Task" />
                                <MenuItem onClick={this.handleClick(user, task)} value="3" primaryText="Delete Task" />

                            </IconMenu>
        
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
            //add possiblity of changing from complete to incomplete
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
   
                    // console.log(updatedTask);
                    const taskId = task.id
                    event.preventDefault()
                    dispatch(changeTask(taskId, updatedTask, user.id))
                    //dispatch(fetchTasks(user.id)) // needs to adjust the props recieve. componentWillRecieveProps

                })


        }
    }
}

export default connect(mapState, mapDispatch)(Tasks)


