import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie, Scatter } from './';
import { fetchCompleteTasksByDate, gotNextWeek, gotPreviousWeek } from '../store';
import moment from 'moment'
import {addDayCountToTasks} from '../store/taskUtils'
import {weekEndDate} from './dateFunctions'

//COMPONENT

export class InsightsByWeek extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadData, user, week} = this.props
    loadData(user.id, week, weekEndDate(week));
  }

  componentWillReceiveProps(nextProps){
    const {loadData, user, week} = nextProps
    if (this.props.week !== week) loadData(user.id, week, weekEndDate(week));
  }

  render() {
    const { completeTasks, week, previousWeek, nextWeek } = this.props
    addDayCountToTasks(completeTasks)
    return (
      <div>
        <h1>{moment(week).format('MMMM D')} - {moment(weekEndDate(week)).format('MMMM D YYYY')}</h1>
        <button onClick={previousWeek}>Prev Week</button>
        <button onClick={nextWeek}>Next Week</button>
        {!completeTasks.length ? <p>no tasks </p> :
          <div className="flexbox-container">
            <Pie tasks={completeTasks} />
            <Scatter tasks={completeTasks} startDate = {week} endDate ={weekEndDate(week)} />
          </div>}
      </div>)
  }
}



//CONTAINER

const mapState = (state) => {
  return {
    user: state.user,
    week: state.week,
    completeTasks: state.completeTasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(userId, startDate, endDate) {
      dispatch(fetchCompleteTasksByDate(userId, startDate, endDate));
    },
    nextWeek() {
      dispatch(gotNextWeek())  // to be used in on click
    },
    previousWeek() {
      dispatch(gotPreviousWeek()) // to be used in on click
    }
  };
}

export default connect(mapState, mapDispatch)(InsightsByWeek)

