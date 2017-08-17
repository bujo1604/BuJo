import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTasks, fetchEvents, fetchNotes } from '../store';
import {TaskBullets, Events} from './';

const UserHome = (props) => {
 

  return (
    <div>
      <h3>Welcome {props.number}</h3>
      <img src="./bujoavatar.gif"></img>

    </div>
  )
}


class MonthDumbComp extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
  
    const {tasks, events, daysInMonth, month} = this.props

    var filteredEvents = [];
    var filteredTasks = [];
    const arrDateFormat = daysInMonth.map(function(day){
        filteredEvents.push([]);
        filteredTasks.push([]);
        return day.date;
    })
   
    for(let i = 0; i < events.length; i++){
        var eventDate = events[i].date;
        let index = arrDateFormat.indexOf(eventDate);
        if(index !== -1){
            filteredEvents[index].push(events[i]);
        }
    }
  
    for(let i = 0; i < tasks.length; i++){
        var taskDate = tasks[i].date;
        let index = arrDateFormat.indexOf(taskDate);
        if(index !== -1){
            filteredTasks[index].push(tasks[i]);
        }
    }
        return (
            <span>
                <text>{month}</text>
                <table>
                    <thead>
                        <tr key="1">
                            <th />
                            <th />
                            <th>Event</th>
                            <th>Task</th>
                        </tr>
                    </thead>

                    <tbody> {daysInMonth.map((day) => {
                        if (day.weekday === "We") {

                            return (
                                <tr key={Math.random()}>
                                    <Link to='/day'><td>
                                        {day.weekday}
                                    </td></Link>
                                    <td> {day.dateOfM}</td>
                                    <td><Events events={filteredEvents[daysInMonth.indexOf(day)]} /></td>
                                    <td><TaskBullets tasks={filteredTasks[daysInMonth.indexOf(day)]} /></td>
                                </tr>

                            )
                        }
                        else {
                            return (
                                <tr key={Math.random()}>
                                    <Link to='/day'>{day.weekday}</Link>
                                    <td> {day.dateOfM}</td>
                                    <td><Events events={filteredEvents[daysInMonth.indexOf(day)]} /></td>
                                    <td><TaskBullets tasks={filteredTasks[daysInMonth.indexOf(day)]} /></td>
                                </tr>

                            )
                        }
                    })} </tbody>

                </table>
            </span>

        )
    
}
}
const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events
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

export default connect(mapState, mapDispatch)(MonthDumbComp);
