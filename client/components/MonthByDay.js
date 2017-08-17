import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
// add task component import later...
// add styled components import later ...
//import { TableH } from './component-style'
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import { gotNextMonth, gotPreviousMonth } from '../store'

const MonthByDay = (props) => {

    const { previousMonth, nextMonth, month } = props
    //daysInMonth includes Sun-Sat view
    console.log(props, "props in MonthByDay")
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)
    return (
        <div>
            <button onClick={previousMonth}>Prev Month</button>
            <button onClick={nextMonth}>Next Month</button>
            <MonthDumbComp daysInMonth={daysInMonth} month={month} />
        </div>
    )
}

const mapState = (state) => ({
    month: state.month
});

const mapDispatch = (dispatch) => {
    return {
        nextMonth() {
            dispatch(gotNextMonth())  // to be used in on click
        },
        previousMonth() {
            dispatch(gotPreviousMonth()) // to be used in on click
        }
    };
}

export default connect(mapState, mapDispatch)(MonthByDay);
