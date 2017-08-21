import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom';
import { fetchHabitMains, fetchRows, updateRowThunk, fetchColors } from '../store';
//import {Tasks, Events, Notes} from './';
import HabitRow from './HabitRow'


class HabitTracker extends Component {

  constructor(props) {
    super(props);
    
    this.clicker = this.clicker.bind(this);
    this.colorSwap = this.colorSwap.bind(this);
   
 
  }

  componentDidMount(){
      this.props.loadColors(this.props.user.id);
       this.props.loadMains(this.props.user.id);
       this.props.loadRows(this.props.user.id);
       
       
  }


  colorSwap(color){

    var sliceOfColors = this.props.colors.slice();
    var ArrOfColors = [];
    sliceOfColors.forEach((color)=>{
        ArrOfColors.push(color.hex);
    })
    console.log(ArrOfColors, "arrofColors")
    if(color == null){return null}
    else{
    if(ArrOfColors.indexOf(color) !== -1){
        if(ArrOfColors.indexOf(color)=== (ArrOfColors.length -1)){
            return "white";
        }
        else{
            return ArrOfColors[ArrOfColors.indexOf(color)+1];
        }
    }
    else{
        return ArrOfColors[0];
    }
    }
  }

  clicker (num, item, color){
      console.log('clicked')
      console.log('num that was clicked', num + 1)
    console.log("item", item)
    console.log("color,", color)
    var newColor = this.colorSwap(color);
    this.props.UpdateRow(num, { [item]: newColor}, this.props.user.id)
  }

  render() {
    const {habitMain, habitRow, user, loadRows, colors} = this.props
    console.log(colors, "colors");
    console.log(this.props, "this.props")
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
    
    
    function thirty1 () {
        var arrDays = [];
        for(var j = 1; j <= 31; j++ ){
            arrDays.push(j);
        }
        return arrDays
    }
    var thirty1Days = thirty1();

    return (

      <div className="singlePage-container">

       <h1>Habit Tracker</h1>
       {arrMains.map((habitmain, ind)=>{
         
       
           return (
            <div key={Math.random()}>
            <p>{habitmain.title}</p>
            {habitmain.row.map((row) => {
                return (
                    <div key={Math.random()}>
                    
                    <p style={{display:"inline"}}>{row.habit}</p>    
                     
                    <svg style={{display:"inline"}} width="930" height="30" key={Math.random()}>
                   
                    {thirty1Days.map((day, ind)=>{
                        var colNumb = ind + 1;
                        var colStr = 'c' + colNumb;
                         
                    return (<g key={Math.random()}>
                    <rect key={ind} x={(day - 1)*30} y="0" width="30" height="30" stroke="black" fill={row['c' + day]} onClick={() => {this.clicker(row.id, colStr, row[colStr])}} />
                    <text key={Math.random()} x={(day - 1)*30+10} y="22" onClick={() => {this.clicker(row.id, colStr, row[colStr])}}>{day}</text>
                    </g>)
                
                    })}
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
  habitRow: state.habitRow,
  colors: state.colors,
});

const mapDispatch = (dispatch) => {
  return {
    loadMains(userId) {
      dispatch(fetchHabitMains(userId))
    
      
    },
    loadRows(userId){
        dispatch(fetchRows(userId))
    },
    loadColors(){
        dispatch(fetchColors())
    },
    UpdateRow(rowId, item, userId){
        console.log(rowId, "rowId inside updateRow");
        console.log(item, "item inside UpdateRow")
        dispatch(updateRowThunk(rowId, item));
        //dispatch(fetchRows(userId));
    }
  };
}

export default connect(mapState, mapDispatch)(HabitTracker);


  /* <rect key={ind} x={(day - 1)*30} y="0" width="30" height="30" stroke="black" fill={row['c' + day]} onClick={() => {this.clicker(row.id, colStr, row[colStr])}} /> */
