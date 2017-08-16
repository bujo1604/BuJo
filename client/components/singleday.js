import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes } from '../store';
import { Tasks, Events, Notes } from './';

class SingleDay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDate: ''
    }
  }

  componentDidMount() {
    this.props.loadData(this.props.user.id);
    this.setState({
      currentDate: moment().format('YYYYMMDD')
    })
  }

  render() {

    const { tasks, events, notes } = this.props
    const currentDate = this.state.currentDate
    console.log(this.state)

    console.log(this.props)

    return (
      <div className="singlePage-container">
        This is the single day view.

          <h2 className="singlePage-title">{moment(currentDate).format('dddd, MMMM Do YYYY')}  </h2>

        <Link to={'/addtask'}> <button> Add Task </button> </Link>
        <button> Add Event </button>
        <Tasks tasks={tasks} />
        <Events events={events} />
        <Notes notes={notes} />
      </div>
    )
  }
}


const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events,
  notes: state.notes
});

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTasks(userId));
      dispatch(fetchEvents(userId));
      dispatch(fetchNotes(userId));
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);

//{moment().format('dddd, MMMM Do YYYY')}