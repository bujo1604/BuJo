import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Pie, Scatter } from './';
import { fetchTasksWithCount, gotNextMonth, gotPreviousMonth } from '../store';

//COMPONENT

export class Insights extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadData(this.props.user.id);
  }

  render() {
    const { tasks, month, previousMonth, nextMonth } = this.props
    const monthString = moment(month).format('YYYYMM')
    const filteredTasks = tasks.filter(task => task.date.slice(0, 6) === monthString)
    return (
      <div>
        <h1>{month}</h1>
        <button onClick={previousMonth}>Prev Month</button>
        <button onClick={nextMonth}>Next Month</button>
        {tasks.length && tasks[0].count &&
          <div className='flexbox-container'>
            <Pie tasks={filteredTasks} />
            <Scatter tasks={filteredTasks} />
          </div>}
      </div>)
  }
}



//CONTAINER

const mapState = (state) => {
  return {
    user: state.user,
    email: state.user.email,
    tasks: state.tasks,
    month: state.month,
    day: state.day
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {
      dispatch(fetchTasksWithCount(userId));
    },
    nextMonth() {
      dispatch(gotNextMonth())  // to be used in on click
    },
    previousMonth() {
      dispatch(gotPreviousMonth()) // to be used in on click
    }
  };
}

export default connect(mapState, mapDispatch)(Insights)

