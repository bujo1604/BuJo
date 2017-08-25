import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {postRow, fetchRows, updateRowThunk, fetchColors } from '../store';
import {colorSwap, habitTrackerProportions, ellipseCoord} from '../utils/svgUtils'
import {dateToYYYYMM01, arrOfMonthNumbers} from '../utils/dateUtils'

class HabitTracker extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: '',
        color: 'blue'
    }
    
    this.clicker = this.clicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeColorState = this.changeColorState.bind(this);
 
  }

  componentDidMount(){
      this.props.loadColors(this.props.user.id);
       this.props.loadRows(this.props.user.id, dateToYYYYMM01(this.props.month), moment(this.props.month).endOf("month").format("YYYYMMDD"));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.month !== nextProps.month) {
      this.props.loadRows(this.props.user.id, dateToYYYYMM01(nextProps.month), moment(nextProps.month).endOf("month").format("YYYYMMDD"));
    }
  }
  handleSubmit(event){
   
    event.preventDefault();
    var month = dateToYYYYMM01(this.props.month);
    var obj = {month: month, habit: this.state.value, userId: this.props.user.id, color:this.state.color}
    this.setState({value: ''})
    this.props.addHabitRow(obj);
}


  clicker (num, item, color, habitcolor){

    var newColor = colorSwap(color, habitcolor);
    this.props.updateRow(num, { [item]: newColor}, this.props.user.id)
  }

  handleChange(event){
      this.setState({value: event.target.value});
    
  }
    changeColorState(event){
        event.preventDefault();
        this.setState({ color: event.target.value })
    }
  render() {
    const {habitRow, colors} = this.props
    var svgWidth = 400;
    var HTPropor = habitTrackerProportions(svgWidth);
    var numDaysR = Number(moment(this.props.month).endOf("month").format('DD'));
    var thirty1Days = arrOfMonthNumbers(this.props.month);

    return (

      <div className="singlePage-container">

       
            <div>
             {habitRow.map((row) => {
                return (
                    <div key={Math.random()}>
                    <div >
   
                    <svg width={HTPropor.svgWidth} height={HTPropor.svgHeight} key={Math.random()}>
                    
                     
                    {thirty1Days.map((day, ind)=>{
      
                       var coord = ellipseCoord(HTPropor, day, ind, numDaysR);
                        var letter = moment((this.props.month)).add(day-1, "day").format("dd")
                        var transf = "rotate(" + coord.rotate + ")" 
                      
                        return (<g key={Math.random()}>
                    <ellipse key={ind} cx={coord.cx} cy={coord.cy} rx={HTPropor.cirR*2} ry={HTPropor.cirR*10} transform={transf} stroke="black" fill={row['c' + day]} onClick={() => {this.clicker(row.id, coord.colStr, row[coord.colStr], row.color)}} />
                    <text textAnchor="middle" x={coord.tcx} y={coord.tcy} fontFamily="ABeeZee" onClick={() => {this.clicker(row.id, coord.colStr, row[coord.colStr], row.color)}}>{day}</text>
                    <text textAnchor="middle" x={coord.dcx} y={coord.dcy} fontFamily="ABeeZee" fontSize="10" onClick={() => {this.clicker(row.id, coord.colStr, row[coord.colStr], row.color)}}>{letter}</text>
                    </g>)
                
                    })}
                    <circle cx={HTPropor.svgCenterX} cy={HTPropor.svgCenterY} r={HTPropor.bCirR*0.650} fill="#d7e7e8" stroke="black"/>
                    <text textAnchor="middle" x={HTPropor.svgCenterX} y={HTPropor.svgCenterY} fontFamily="ABeeZee">{row.habit}</text>
                    </svg>
                    
                    </div>
                    </div>
                )
            })}
            </div>
            <div>
            <div>
            <form onSubmit={this.handleSubmit}>
                     <label>
                         Habit:
                     <input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
                     </label>
                     <button className='button is-success' type="submit"> Add New</button>
                 </form> 
                 <div className='color'>
                  <div> Select Color: </div>
                   {colors.map((cat, idx) => (
                         (
                             <label key={idx} className='color'>
                                 <button className="button" id={cat.id} onClick={this.changeColorState} value={cat.hex}
                                 style={{ color: `${cat.hex}`}} >
                                 &#x25CF;
                                 </button>
                             </label>
                         )))}
                    </div> 
                 </div>
          </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  habitRow: state.habitRow,
  colors: state.colors,
  month: state.month
});

const mapDispatch = (dispatch) => {
  return {

    loadRows(userId, startdate , enddate){
        dispatch(fetchRows(userId, startdate ,enddate))
    },
    loadColors(){
        dispatch(fetchColors())
    },
    updateRow(rowId, item, userId){
        dispatch(updateRowThunk(rowId, item));
    },
    addHabitRow(newRow){
            dispatch(postRow(newRow));
        }
  };
}

export default connect(mapState, mapDispatch)(HabitTracker);