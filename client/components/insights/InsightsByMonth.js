import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie, Scatter } from '../'
import moment from 'moment'
import { fetchCompleteTasksByDate, gotNextMonth, gotPreviousMonth } from '../../store';
import {addDayCountToTasks} from '../../utils/taskUtils'
import {monthStartDate, monthEndDate, weekStartDate} from '../../utils/dateUtils'
import * as d3 from 'd3';

//COMPONENT

export class InsightsByMonth extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadData, user, month} = this.props
    loadData(user.id, monthStartDate(month), monthEndDate(month));
  }

  componentWillReceiveProps(nextProps){
    const {loadData, user, month, insightsView} = nextProps
    if (this.props.month !== month || this.props.insightsView !== insightsView) loadData(user.id, monthStartDate(month), monthEndDate(month));
  }

  render() {
    const { completeTasks, month, previousMonth, nextMonth } = this.props
    completeTasks.forEach(task => {task.date = weekStartDate(task.date)})
    addDayCountToTasks(completeTasks)
    return (
      <div>

            <div className="content-title">
          <a href="#" className="previous round"  onClick={previousMonth}>
            &#8249;
          </a>
        {month}

        { monthEndDate(month) < moment(new Date()).format('YYYYMMDD') && <a href="#" className="next round" onClick={nextMonth}>
            &#8250;
          </a>}
          </div>

        {!completeTasks.length ? <p>no tasks </p> :
          <div className="flexbox-container">
          <div className='inline'>
            <Pie tasks={completeTasks} />
            <Scatter tasks={completeTasks} startDate = {monthStartDate(month)} endDate ={weekStartDate(monthEndDate(month))} tickNum = {5} tickFormat = {d3.timeFormat('%b %d')}/>
             </div>
          </div>}



      </div>)
  }
}



//CONTAINER

const mapState = (state) => {
  return {
    user: state.user,
    month: state.month,
    completeTasks: state.completeTasks,
    insightsView: state.insightsView
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData(userId, startDate, endDate) {
      dispatch(fetchCompleteTasksByDate(userId, startDate, endDate));
    },
    nextMonth() {
      dispatch(gotNextMonth())  // to be used in on click
    },
    previousMonth() {
      dispatch(gotPreviousMonth()) // to be used in on click
    }
  };
}

export default connect(mapState, mapDispatch)(InsightsByMonth)

