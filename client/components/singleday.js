import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay} from '../store';
import {Tasks, Events, Notes} from './';

class SingleDay extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
  }

  render() {

    const {tasks, events, notes, day, previousDay, nextDay} = this.props
    console.log(notes);
    const tasksOnDay = tasks.filter(function(task){
        return task.date === day
    })
    const eventsOnDay = events.filter(function(event){
        return event.date === day
    })
    const notesOnDay = notes.filter(function(note){
        return note.date === day
    })

    return (

      <div className="singlePage-container">
          
        <button onClick={previousDay}> Previous Day </button>
        <h2 className="singlePage-title"> {moment(day).format("dddd, MMMM Do YYYY")} </h2>
        <button onClick={nextDay}> Next Day </button>

          <Tasks tasks={tasksOnDay} />
        <Link to={'/addtask'}>
          <button> Add Tasks </button>
        </Link>

        <Events events={eventsOnDay} />
        <Link to={'/addevent'}>
        <button> Add Event </button>
        </Link>

        <Notes notes={notesOnDay} />
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
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);
