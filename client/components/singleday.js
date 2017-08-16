import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes } from '../store';
import {Tasks, Events, Notes} from './';

class SingleDay extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadData(this.props.user.id);
  }

  render() {

    const {tasks, events, notes} = this.props

    return (
      <div className="singlePage-container">
          <h2 className="singlePage-title"> {moment().format('dddd, MMMM Do YYYY')} </h2>
        <Tasks tasks={tasks} />
        <Events events={events} />
        <Link to={'/addevent'}>
        <button> Add Event </button>
        </Link>
        <Notes notes={notes} />
        <Link to={'/addnote'}>
          <button> Add Note </button>
        </Link>
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
