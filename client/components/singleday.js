import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTaskList, fetchEventList } from '../store';
import Tasks from './tasks'
import Events from './events'
import TaskForm from './task-form'



class SingleDay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ''
    }
  }

  componentDidMount() {
    this.props.loadData(this.props.user.id);
  }

  render() {
    const tasks = this.props.tasks.taskList
    const events = this.props.events.eventList

    return (
      <div className="singlePage-container">
        This is the single day view.
          <h2 className="singlePage-title"> {moment().format('dddd, MMMM Do YYYY')} </h2>
        <Link to={'/addtask'}> <button> Add Task </button> </Link>
        <button> Add Event </button>
        <Tasks tasks={tasks} />
        <Events events={events} />
      </div>
    )
  }
}


const mapState = (state) => ({
  tasks: state.tasks,
  events: state.events,
  user: state.user
});

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTaskList(userId));
      dispatch(fetchEventList(userId));
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);

