import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import { gotNextMonth, gotPreviousMonth, updatedMonth, fetchRows } from '../store'
import HabitTracker from './HabitTracker';

const HabitTrackerMonth = (props) => {

    const { previousMonth, nextMonth, month, updateMonth } = props
    //daysInMonth includes Sun-Sat view
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)
    return (
         <div className='space-around-buttons'>
        <h2 className="content-title">Habit Tracker</h2>
        <div className="content-title">
            <a href='#' className='previous round' onClick={previousMonth}>&#8249;</a>
            <h2 className='singlePage-title'> {month} </h2>
            <a href='#' className='next round' onClick={nextMonth}> &#8250; </a>
        </div>

            {/*<button onClick={()=> updateMonth(moment(new Date()).format("MMMM YYYY"))}>Current Month</button>*/}
            <HabitTracker  /> {/*moment(this.props.month).startOf("month").format("YYYYMMDD") */}
        </div>
    )
}

const mapState = (state) => ({
    month: state.month
});

const mapDispatch = (dispatch) => {
    return {
        nextMonth() {
            dispatch(gotNextMonth());  // to be used in on click
            //dispatch(fetchRows(userId, startdate,enddate))
        },
        previousMonth() {
            dispatch(gotPreviousMonth()) // to be used in on click
           // dispatch(fetchRows(userId, startdate,enddate))
        },
        updateMonth(month){
            dispatch(updatedMonth(month))
            //dispatch(fetchRows(userId, startdate,enddate))
        },

    };
}

export default connect(mapState, mapDispatch)(HabitTrackerMonth);
