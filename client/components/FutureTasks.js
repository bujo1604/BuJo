import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import { gotNextMonth, gotPreviousMonth, updatedMonth, fetchFutureTasks } from '../store'

const FutureTasks = (props) => {

    const { previousMonth, nextMonth, month, updateMonth } = props
    //daysInMonth includes Sun-Sat view
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)
    return (
        <div>
            <button onClick={previousMonth}>Prev Month</button>
            <h1>{month}</h1>
            <button onClick={nextMonth}>Next Month</button>
            <button onClick={()=> updateMonth(moment(new Date()).format("MMMM YYYY"))}>Current Month</button>
            <MonthDumbComp daysInMonth={daysInMonth} month={month} />
        </div>
    )
}

const mapState = (state) => ({
    month: state.month,
    future: state.future
});

const mapDispatch = (dispatch) => {
    return {
        nextMonth() {
            dispatch(gotNextMonth())  // to be used in on click
        },
        previousMonth() {
            dispatch(gotPreviousMonth()) // to be used in on click
        },
        updateMonth(month){
            dispatch(updatedMonth(month))
        }
    };
}

export default connect(mapState, mapDispatch)(FutureTasks);