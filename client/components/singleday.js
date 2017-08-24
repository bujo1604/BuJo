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
    const {
      tasks,
      events,
      notes,
      day,
      previousDay,
      nextDay,
      updateDay
    } = this.props;
    const tasksOnDay = tasks.filter(function(task) {
      return task.date === day;
    });
    const eventsOnDay = events.filter(function(event) {
      return event.date === day;
    });
    const notesOnDay = notes.filter(function(note) {
      return note.date === day;
    });

    return (
      <div className="content-container">

        <div className="content-main">
 <div className='space-around-buttons'>

           <div className="content-title">
          <a href="#" className="previous round" onClick={previousDay}>
            &#8249;
          </a>
          <h2>{moment(day).format("ddd D")}</h2>
          <h2>{moment(day).format("MMMM YYYY")}</h2>
          <a href="#" className="next round" onClick={nextDay}>
            &#8250;
          </a>
          </div>
        </div>

  {/*<button
            className="button is-primary"
            onClick={() => updateDay(moment(new Date()).format("YYYYMMDD"))}
          >
            Current Day
          </button>*/}

        <Events events={eventsOnDay} />
        <Tasks tasks={tasksOnDay} />
        <Notes notes={notesOnDay} />
        <div>
          <Link to={"/addnote"}>
            <button className="button is-success" onClick={this.handleSubmit}>

              <span>Add Note</span>
            </button>
          </Link>
          <Link to={"/addtask"}>
            <button className="button is-success" onClick={this.handleSubmit}>

              <span>Add Task</span>
            </button>
          </Link>
          <Link to={"/addevent"}>
            <button className="button is-success" onClick={this.handleSubmit}>

              <span>Add Event</span>
            </button>
          </Link>
        </div>
        </div>
         <div className="content-sidebar" >
          <Sidebar />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events,
  notes: state.notes,
  day: state.day
});

const mapDispatch = dispatch => {
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
};

export default connect(mapState, mapDispatch)(SingleDay);
