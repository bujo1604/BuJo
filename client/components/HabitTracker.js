import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
//import {Link} from 'react-router-dom';
import { fetchHabitMains, postRow, fetchRows, updateRowThunk, fetchColors, postHabitMain, gotNextMonth, gotPreviousMonth, updatedMonth } from '../store';
//import {Tasks, Events, Notes} from './';
import HabitRow from './HabitRow'


function circleFunc(r, cx, cy, TotNum, order) {
    
    var angle = ((order - Math.ceil(TotNum/4) - 1)/ TotNum )*2*Math.PI;

    var x = Math.floor(Math.cos(angle)*r + cx)
    var y = Math.floor(Math.sin(angle)*r + cy);
    var rad = Math.floor(order * 360 / TotNum);
    
    var coord = [x,y, rad]; // x,y
    return coord;
}
class HabitTracker extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: '',
        color: 'blue'
   

    }
    
    this.clicker = this.clicker.bind(this);
    this.colorSwap = this.colorSwap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.thirty1 = this.thirty1.bind(this);
    this.changeColorState = this.changeColorState.bind(this);
 
  }

  componentDidMount(){
      this.props.loadColors(this.props.user.id);
       this.props.loadMains(this.props.user.id);
       this.props.loadRows(this.props.user.id, moment(this.props.month).startOf("month").format("YYYYMMDD"), moment(this.props.month).endOf("month").format("YYYYMMDD"));
       
       
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.month !== nextProps.month) {
      //recreate X scale with domain min and max as the new start and end dates
      this.props.loadRows(this.props.user.id, moment(nextProps.month).startOf("month").format("YYYYMMDD"), moment(nextProps.month).endOf("month").format("YYYYMMDD"));
    }
  }
  handleSubmit(event){
   
    event.preventDefault();
    var month = moment(this.props.month).startOf("month").format("YYYYMMDD");

    var obj = {month: month, habit: this.state.value, userId: this.props.user.id, color:this.state.color}
    this.props.addHabitRow(obj);
}
  colorSwap(color, c2){
    if(color === "white"){
        return c2
    }
    else{
        return "white"
    }
    /*
    var sliceOfColors = this.props.colors.slice();
    var ArrOfColors = [];
    sliceOfColors.forEach((color)=>{
        ArrOfColors.push(color.hex);
    })
  

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
*/
  }

  clicker (num, item, color, habitcolor){

    var newColor = this.colorSwap(color, habitcolor);
    this.props.UpdateRow(num, { [item]: newColor}, this.props.user.id)
  }

  handleChange(event){
      this.setState({value: event.target.value});
    
  }
  thirty1 () {
        var arrDays = [];
        var numDays = Number(moment(this.props.month).endOf("month").format('DD'));
     
        
        for(var j = 1; j <= numDays; j++ ){
            arrDays.push(j);
        }
        return arrDays
    }
    changeColorState(event){
        event.preventDefault();
        this.setState({ color: event.target.value })
    }
  render() {
    const {habitMain, habitRow, user, loadRows, colors, addHabitMain} = this.props
    
    var svgWidth = 400;
    var svgHeight = svgWidth;
    var cirR = svgWidth/60; 
    var svgCenterX = svgWidth / 2;
    var svgCenterY = svgHeight / 2;
    var bCirR = (svgWidth * 0.6) /2
    var orderedHabit = habitMain.slice();
    var numDaysR = Number(moment(this.props.month).endOf("month").format('DD'));

    var compareFunc = function (a,b) {
        if(a.month < b.month){
         
            return -1;
        }
        else if(b.month < a.month){
        
            return 1;
        }
        return 0;
    }
/*
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
  
    habitRow.forEach((row)=>{
      
        var mainId = row.habitTrackerMainId;
        var arrId = arrMainIds.indexOf(mainId);
        arrMains[arrId].row.push(row);

    })

  */
    
    /*
    function thirty1 () {
        var arrDays = [];
        var numDays = moment(this.props.month).endOf("month").format('DD');
        console.log(numDays, "numDays in HabitTracker")
        for(var j = 1; j <= 31; j++ ){
            arrDays.push(j);
        }
        return arrDays
    }
    */
    var thirty1Days = this.thirty1();

    return (

      <div className="singlePage-container">
      

       <h1>Habit Tracker</h1>
       <div>
       <form onSubmit={this.handleSubmit}>
                <label>
                    Habit:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add New Habit Tracker" />
            </form> 

              {colors.map((cat, idx) => (
                    (
                        <label key={idx} className='color'>
                            <button className="button" id={cat.id} onClick={this.changeColorState} value={cat.hex} > <span style={{ color: `${cat.hex}` }}> &#x25CF;</span></button>

                            {/*
                            <button id={cat.id} onClick={this.handleClick}>delete</button>
                            */}
                        </label>
                    )))}
            </div>
            <div>
             {habitRow.map((row) => {
                return (
                    <div key={Math.random()}>
                    <div >
                    
                    
                       
                     
                    <svg width={svgWidth} height={svgHeight} key={Math.random()}>
                    
                     
                    {thirty1Days.map((day, ind)=>{
                        var colNumb = ind + 1;
                        var colStr = 'c' + colNumb;
                        var angle = circleFunc(bCirR, svgCenterX, svgCenterY, numDaysR , day)[2];
                         var cx = circleFunc(bCirR, svgCenterX, svgCenterY, numDaysR , day)[0];
                         var cy = circleFunc(bCirR, svgCenterX, svgCenterY, numDaysR , day)[1];
                        var tcx = circleFunc(bCirR + (1.6*cirR), svgCenterX, svgCenterY, numDaysR , day)[0];
                        var tcy = circleFunc(bCirR + (1.6*cirR), svgCenterX, svgCenterY, numDaysR , day)[1];
                        var dcx = circleFunc(bCirR - 1*cirR, svgCenterX, svgCenterY, numDaysR , day)[0];
                        var dcy = circleFunc(bCirR - 1*cirR, svgCenterX, svgCenterY, numDaysR , day)[1];
                        var letter = moment((this.props.month)).add(day-1, "day").format("dd")
                         var rotate = angle.toString() + " " + cx + " " + cy;
                        var transf = "rotate(" + rotate + ")" 
                        return (<g key={Math.random()}>
                    <ellipse key={ind} cx={cx} cy={cy} rx={cirR*2} ry={cirR*10} transform={transf} stroke="black" fill={row['c' + day]} onClick={() => {this.clicker(row.id, colStr, row[colStr], row.color)}} />
                    <text textAnchor="middle" x={tcx} y={tcy} fontFamily="ABeeZee" onClick={() => {this.clicker(row.id, colStr, row[colStr], row.color)}}>{day}</text>
                    <text textAnchor="middle" x={dcx} y={dcy} fontFamily="ABeeZee" fontSize="10" onClick={() => {this.clicker(row.id, colStr, row[colStr], row.color)}}>{letter}</text>
                    </g>)
                
                    })}
                    <circle cx={svgCenterX} cy={svgCenterY} r={bCirR*0.650} fill="#d7e7e8" stroke="black"/>
                    <text textAnchor="middle" x={svgCenterX} y={svgCenterY} fontFamily="ABeeZee">{row.habit}</text>
                    </svg>
                    
                    </div>
                    </div>
                )
            })}
            </div>
            <div>
     
    </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  habitMain: state.habitMain,
  habitRow: state.habitRow,
  colors: state.colors,
  month: state.month
});

const mapDispatch = (dispatch) => {
  return {
    loadMains(userId) {
      dispatch(fetchHabitMains(userId))
    
      
    },
    addHabitMain(newMain){
        dispatch(postHabitMain(newMain))
    },
    loadRows(userId, startdate ,enddate){
        dispatch(fetchRows(userId, startdate,enddate))
    },
    loadColors(){
        dispatch(fetchColors())
    },
    UpdateRow(rowId, item, userId){
       
        dispatch(updateRowThunk(rowId, item));
      
    },
         nextMonth() {
            dispatch(gotNextMonth())  // to be used in on click
        },
        previousMonth() {
            dispatch(gotPreviousMonth()) // to be used in on click
        },
        updateMonth(month){
            dispatch(updatedMonth(month))
        },
         addHabitRow(newRow){
            dispatch(postRow(newRow));
        }
  };
}

export default connect(mapState, mapDispatch)(HabitTracker);
