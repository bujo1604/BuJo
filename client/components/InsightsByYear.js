import React, { Component } from 'react'
import { connect } from 'react-redux'
import {monthStartDate, monthEndDate} from './dateFunctions'
import { Pie, Scatter } from './';
import { fetchCompleteTasksByDate, gotNextMonth, gotPreviousMonth } from '../store';
import {addDayCountToTasks, addWeekCountToTasks} from '../store/taskUtils'

//COMPONENT

export class InsightsByYear extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadData, user, month} = this.props
    loadData(user.id, monthStartDate(month), monthEndDate(month));
  }

  componentWillReceiveProps(nextProps){
    const {loadData, user, month} = nextProps
    if (this.props.month !== month) loadData(user.id, monthStartDate(month), monthEndDate(month));
  }

  render() {
    const { completeTasks, month, previousMonth, nextMonth } = this.props
    addWeekCountToTasks(completeTasks)
    return (
      <div>
        <h1>YEAR</h1>
        <button onClick={previousMonth}>Prev Month</button>
        <button onClick={nextMonth}>Next Month</button>
        {!completeTasks.length ? <p>no tasks </p> :
          <div className="flexbox-container">
            <Pie tasks={completeTasks} />
            <Scatter tasks={completeTasks} />
          </div>}
      </div>)
  }
}



//CONTAINER

const mapState = (state) => {
  return {
    user: state.user,
    month: state.month,
    completeTasks: state.completeTasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(userId, startDate, EndDate) {
      dispatch(fetchCompleteTasksByDate(userId, startDate, EndDate));
    },
    nextMonth() {
      dispatch(gotNextMonth())  // to be used in on click
    },
    previousMonth() {
      dispatch(gotPreviousMonth()) // to be used in on click
    }
  };
}

export default connect(mapState, mapDispatch)(InsightsByYear)

