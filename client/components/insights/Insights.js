import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { InsightsByMonth, InsightsByWeek } from '../';
import { updateView, updatedMonth, updatedWeek } from '../../store';

//COMPONENT

export class Insights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { insightsView, changeViewWeek, changeViewMonth } = this.props
    return (
      <div>
      <div className='space-around-buttons'>
      <h2 className="content-title" >Insights</h2>

        <button  className="button is-primary" onClick={() => changeViewWeek('week')}> Weekly Insights </button>
        <button  className="button is-primary" onClick={() => changeViewMonth('month')}> Monthly Insights </button>
        </div>

        {insightsView === 'week' && <InsightsByWeek />}
        {insightsView === 'month' && <InsightsByMonth />}

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
    changeViewWeek(view) {
      dispatch(updateView(view));
      dispatch(updatedWeek(moment(new Date()).format("YYYYMMDD")))
    },
    changeViewMonth(view) {
      dispatch(updateView(view));
      dispatch(updatedMonth(moment(new Date()).format('MMMM YYYY')))
    }
  };
}

export default connect(mapState, mapDispatch)(Insights)

