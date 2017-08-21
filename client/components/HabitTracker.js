import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom';
import { fetchHabitMains, fetchRows } from '../store';
//import {Tasks, Events, Notes} from './';
import HabitRow from './HabitRow'

class HabitTracker extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
       this.props.loadMains(this.props.user.id);
       this.props.loadRows(this.props.user.id);
  }


  render() {
    const {habitMain, habitRow} = this.props
    
    var orderedHabit = habitMain.slice();

    var compareFunc = function (a,b) {
        if(a.month < b.month){
            console.log(a.month, "a.month")
            return -1;
        }
        else if(b.month < a.month){
            console.log(a.month, "a.month")
            return 1;
        }
        return 0;
    }

    orderedHabit.sort(compareFunc);

    var arrMains =[];
    var arrMainIds = [];
    orderedHabit.forEach((main)=>{
        var mainObj ={};
        mainObj.row = [];
        mainObj.title = main.title;
        mainObj.id = main.id;
        arrMains.push(mainObj);
        arrMainIds.push(main.id);
    })
   // console.log(habitRow, "habitRow in Habit Tracker")
   // console.log(orderedHabit, "orderedHabit in Habit Tracker")

    //var arrMainRow = [];
    habitRow.forEach((row)=>{
      
        var mainId = row.habitTrackerMainId;
        var arrId = arrMainIds.indexOf(mainId);
        arrMains[arrId].row.push(row);

    })

    console.log(arrMains, "arrMains")
    console.log(arrMainIds, "arrMainIds")
    

    return (

      <div className="singlePage-container">

       <h1>Habit Tracker</h1>
       {arrMains.map((habitmain, ind)=>{
         
       
           return (
            <div key={Math.random()}>
            <p>{habitmain.title}</p>
            {habitmain.row.map((row) => {
                return (
                    <div>
                    
                    <p>{row.habit}</p>    
                    <svg>
                    
                    </svg>
                    </div>
                )
            })}
            {/* <HabitRow habitRowArr={arrMains} /> */}
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
  habitMain: state.habitMain,
  habitRow: state.habitRow
});

const mapDispatch = (dispatch) => {
  return {
    loadMains(userId) {
      dispatch(fetchHabitMains(userId))
    
      
    },
    loadRows(userId){
        dispatch(fetchRows(userId))
    }
  };
}

export default connect(mapState, mapDispatch)(HabitTracker);
