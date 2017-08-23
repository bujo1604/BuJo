import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import { gotNextMonth, gotPreviousMonth, updatedMonth } from '../store'


const MonthByDay = (props) => {

    const { previousMonth, nextMonth, month, updateMonth } = props
    //daysInMonth includes Sun-Sat view
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)
    return (
        <div>

        <div className='singlePage-container'>

           <div className='space-around-buttons'>

            {/*<button className="button is-primary" onClick={()=> updateMonth(moment(new Date()).format("MMMM YYYY"))}>Current Month</button>*/}
    </div>
           <div className="content-title">
            <a href='#' className='previous round' onClick={previousMonth}>&#8249;</a>
            <h2 className='singlePage-title'> {month} </h2>
            <a href='#' className='next round' onClick={nextMonth}> &#8250; </a>
        </div>
       </div>


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
        },
        updateMonth(month){
            dispatch(updatedMonth(month))
        }
    };
}

export default connect(mapState, mapDispatch)(MonthByDay);
