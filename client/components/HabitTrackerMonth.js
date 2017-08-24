import React from 'react'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat, formM_Y} from '../utils/dateUtils'
import { gotNextMonth, gotPreviousMonth, updatedMonth} from '../store'
import HabitTracker from './HabitTracker';

const HabitTrackerMonth = (props) => {

    const { previousMonth, nextMonth, month, updateMonth } = props
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)

    return (
        <div>
        Habit Tracker <br/>
        <div className='singlePage-container'>
            <a href='#' className='previous round' onClick={previousMonth}>&#8249;</a>
            <h2 className='singlePage-title'> {month} </h2>
            <a href='#' className='next round' onClick={nextMonth}> &#8250; </a>
        </div>
        <hr />
            <button onClick={()=> updateMonth(formM_Y())}>Current Month</button>
            <HabitTracker  /> 
        </div>
    )
}

const mapState = (state) => ({
    month: state.month
});

const mapDispatch = (dispatch) => {
    return {
        nextMonth() {
            dispatch(gotNextMonth());
        },
        previousMonth() {
            dispatch(gotPreviousMonth());
        },
        updateMonth(month){
            dispatch(updatedMonth(month));
        },

    };
}

export default connect(mapState, mapDispatch)(HabitTrackerMonth);
