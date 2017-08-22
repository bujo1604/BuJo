import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom';
import { fetchHabitMains, fetchRows } from '../store';
//import {Tasks, Events, Notes} from './';
import HabitSVG from './HabitSVG';

class HabitRow extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
       //this.props.loadData(this.props.user.id, this.props.habitmainId);
  }


  render() {
    const { habitRowArr } = this.props
   
    
    console.log(habitRowArr, "habitRowArr")
    return (

      <div className="singlePage-container">
      <h5>Habit Row Is Here</h5>

       {/* <HabitSVG habitRows={habitRow}/> */}
    
      </div>
    )
  }
}

const mapState = (state) => ({
  /*
  user: state.user,
  habitMain: state.habitMain,
  habitRow: state.habitRow
  */
});

const mapDispatch = (dispatch) => {
  return {
    /*
    loadData(userId, habitmainId) {
        console.log(userId, habitmainId, "inputs into load data")
      dispatch(fetchRows(userId, habitmainId));
    },
    */
  };
}

export default connect(mapState, mapDispatch)(HabitRow);
