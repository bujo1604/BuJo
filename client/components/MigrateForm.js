import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCategories, removeCategory, fetchColors, createTask, fetchTasks, changeTask , fetchFutureTasks} from '../store';
import moment from 'moment';

class MigrateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newDate: ""
        }

        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount() {
    

    }
    

    handleSubmit(event) {
        event.preventDefault();
      
        const updatedTask = {
            date: moment(event.target.date.value).format("YYYYMMDD"),
            id: 2,
            userId: this.props.user.id,
            assigned: "assigned"
        }
        
        const userId =this.props.user.id;
        this.props.changedTask(updatedTask, 2, userId);

    }
    selectedCategory(event) {
        event.preventDefault();
        this.setState({ categoryId: event.target.id })

    }
    render() {

   


        return (
            <div>
              Migrate 
            <br />
                <form onSubmit={this.handleSubmit}>
                    <input className="input" name='date' type="text" placeholder="Input Date" />
                    <button
                  className="button is-success"
                >
                 <span className="icon is-small">
                    <i className="fa fa-check" />
                  </span>
                  <span>Migrate That Task!</span>
                </button>
                </form>
            </div>
        )
    }
}
const mapState = (state) => ({
    user: state.user,
    tasks: state.tasks,
    future: state.future
    

})

const mapDispatch = (dispatch, ownProps) => {
    return {
  
        changedTask(updatedTask, taskId, userId) {
            dispatch(changeTask(taskId, updatedTask, userId));  // task is now assigned
            dispatch(fetchFutureTasks(userId)); // action is triggered and task is still there
            dispatch(fetchTasks(userId));
           
        }

    };
}
export default connect(mapState, mapDispatch)(MigrateForm);
