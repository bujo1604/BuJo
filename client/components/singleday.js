import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay, updatedDay } from '../store';
import { Tasks, Events, Notes, Sidebar } from './';

class SingleDay extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { tasks, events, notes, day, previousDay, nextDay, updateDay } = this.props
    const tasksOnDay = tasks.filter(function (task) {
      return task.date === day
    })
    const eventsOnDay = events.filter(function (event) {
      return event.date === day
    })
    const notesOnDay = notes.filter(function (note) {
      return note.date === day
    })

    return (
      <div className="content-container">

        <div className="content-main">
          <div className="content-title">
            <a href='#' onClick={previousDay}> &#8249;</a>
            <h2> {moment(day).format("ddd D")}  </h2>
            <h2> {moment(day).format("MMMM YYYY")} </h2>
            <a href='#' onClick={nextDay}> &#8250;</a>
          </div>
          <button onClick={() => updateDay(moment(new Date()).format("YYYYMMDD"))}> Current Day </button>

          <h3 className="singleDay-headings">Events</h3>
          <Events events={eventsOnDay} />
          <Link to={'/addevent'}>
            <button> Add Event </button>
          </Link>

          <Tasks tasks={tasksOnDay} />
          <Link to={'/addtask'}>
            <button> Add Tasks </button>
          </Link>


          <Notes notes={notesOnDay} />
          <Link to={'/addnote'}>
            <button> Add Note </button>
          </Link>
        </div>

        <div className="content-sidebar" >
          <Sidebar />
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events,
  notes: state.notes,
  day: state.day
});

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTasks(userId));
      dispatch(fetchEvents(userId));
      dispatch(fetchNotes(userId));
    },
    nextDay() {
      dispatch(gotNextDay())
    },
    previousDay() {
      dispatch(gotPreviousDay())
    },
    updateDay(day) {
      dispatch(updatedDay(day))
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);
