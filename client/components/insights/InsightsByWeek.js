import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie, Scatter } from '../';
import { fetchCompleteTasksByDate, gotNextWeek, gotPreviousWeek } from '../../store';
import moment from 'moment'
import {addDayCountToTasks} from '../../utils/taskUtils'
import {weekEndDate} from '../../utils/dateUtils'
import * as d3 from 'd3';

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
    const {loadData, user, week, insightsView} = nextProps
    if (this.props.week !== week || this.props.insightsView !== insightsView) loadData(user.id, week, weekEndDate(week));
  }

  render() {
    const { completeTasks, week, previousWeek, nextWeek } = this.props
    addDayCountToTasks(completeTasks)
    return (
      <div>
      <div className="singlePage-container">
          <div className="content-title">
        <a href="#" className="previous round" onClick={previousWeek}> &#8249;
          </a>
          <h1 >{moment(week).format('MMMM D')} - {moment(weekEndDate(week)).format('MMMM D YYYY')}</h1>
        {week < moment(new Date()).format('YYYYMMDD') && <a href="#" className="next round"  onClick={nextWeek}> &#8250;
          </a>  }

          </div>

          </div>

        {!completeTasks.length ? <p>no tasks </p> :
          <div className="flexbox-container">
            <Pie tasks={completeTasks} />
            <Scatter tasks={completeTasks} startDate = {week} endDate ={weekEndDate(week)} tickNum = {7} tickFormat = {d3.timeFormat("%a")}/>
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

