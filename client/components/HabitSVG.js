import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom';
import { fetchHabitMains, fetchRows } from '../store';
//import {Tasks, Events, Notes} from './';

class HabitSVG extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      // this.props.loadData(this.props.user.id);
  }


  render() {
   const { habitRows} = this.props
    
console.log(habitRows, "habitRows in HabitSVG")
    return (

      <div className="singlePage-container">
      

       <h1>Habit svg</h1> 
       { habitRows.map((row, ind)=>{
           console.log(row.c4, "row.c4")
            console.log(row.c1, "row.c1")
           return (
               <div>
               <h3>{row.habit}</h3>
               <h3>{row.habitTrackerMainId}</h3>
            <svg width="10000" height="30">
            <rect key={ind} x="0" y="0" width="30" height="30" stroke="black" fill={row.c1} />
            <rect key={ind+100} x="30" y="0" width="30" height="30" stroke="black" fill={row.c4} />
            </svg>
            </div>
            )
       })

       }
    
    
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  habitRow: state.habitRow
});

const mapDispatch = (dispatch) => {
  return {
    loadData(userId) {

      dispatch(fetchRows(userId));
    },
  };
}

export default connect(mapState, mapDispatch)(HabitSVG);
