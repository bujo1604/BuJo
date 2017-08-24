import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTasks, fetchEvents, fetchNotes, updatedDay } from "../store";
import { TaskBullets, EventsDumbComponent } from "./";

class MonthDumbComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, events, daysInMonth, month, updateDay } = this.props;
    var filteredEvents = [];
    var filteredTasks = [];
    const arrDateFormat = daysInMonth.map(function(day) {
      filteredEvents.push([]);
      filteredTasks.push([]);
      return day.date;
    });

    for (let i = 0; i < events.length; i++) {
      var eventDate = events[i].date;
      let index = arrDateFormat.indexOf(eventDate);
      if (index !== -1) {
        filteredEvents[index].push(events[i]);
      }
    }

    for (let i = 0; i < tasks.length; i++) {
      var taskDate = tasks[i].date;
      let index = arrDateFormat.indexOf(taskDate);
      if (index !== -1) {
        filteredTasks[index].push(tasks[i]);
      }
    }
    return (
      <span>
      <div >
        <table className="month">
          <tr key="1">
            <th>Date</th>
            <th>Event</th>
            <th>Task</th>
          </tr>

          {daysInMonth.map(day => {
            if (day.weekday === "We") {
              return (
                <tr key={Math.random()}>
                  <td>
                    <Link to="/day" onClick={() => updateDay(day.date)}>
                      {day.weekday} {day.dateOfM}
                    </Link>
                  </td>

                  <td className="day">
                    <EventsDumbComponent
                      events={filteredEvents[daysInMonth.indexOf(day)]}
                    />
                  </td>
                  <td>
                    <TaskBullets
                      tasks={filteredTasks[daysInMonth.indexOf(day)]}
                    />
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={Math.random()}>
                  <td>
                    <Link to="/day" onClick={() => updateDay(day.date)}>
                      {" "}{day.weekday} {day.dateOfM}
                    </Link>
                  </td>
                  <td className="day">
                    <EventsDumbComponent
                      events={filteredEvents[daysInMonth.indexOf(day)]}
                    />
                  </td>
                  <td>
                    <TaskBullets
                      tasks={filteredTasks[daysInMonth.indexOf(day)]}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </table>
        </div>
      </span>
    );
  }
}
const mapState = state => ({
  user: state.user,
  tasks: state.tasks,
  events: state.events,
  day: state.day
});

const mapDispatch = dispatch => {
  return {
    loadData(userId) {
      dispatch(fetchTasks(userId));
      dispatch(fetchEvents(userId));
      dispatch(fetchNotes(userId));
    },
    updateDay(day) {
      dispatch(updatedDay(day));
    }
  };
};

export default connect(mapState, mapDispatch)(MonthDumbComp);
