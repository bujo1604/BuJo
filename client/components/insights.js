import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InsightsByMonth, InsightsByWeek, InsightsByYear } from './';
import { updateView } from '../store';

//COMPONENT

export class Insights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {insightsView, changeView} = this.props
    return (
      <div>
        <button onClick= {() => changeView('week')}> Week </button>
        <button onClick= {() => changeView('month')}> Month </button>
        <button onClick= {() => changeView('year')}> Year </button>
        {insightsView === 'week' && <InsightsByWeek />}
        {insightsView === 'month' && <InsightsByMonth />}
        {insightsView === 'year' && <InsightsByYear />}
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
    changeView(view) {
      dispatch(updateView(view));
    }
  };
}

export default connect(mapState, mapDispatch)(Insights)

