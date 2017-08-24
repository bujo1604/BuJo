import React from 'react'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat, formM_Y} from '../utils/dateUtils'
import { gotNextMonth, gotPreviousMonth, updatedMonth} from '../store'
import HabitTracker from './HabitTracker';

const HabitTrackerMonth = (props) => {

    const { previousMonth, nextMonth, month, updateMonth } = props
    const daysInMonth = makeArrOfDaysInMonthSunToSat(month)

    return (
         <div className='space-around-buttons'>
        <h2 className="content-title">Habit Tracker</h2>
        <div className="content-title">
            <a href='#' className='previous round' onClick={previousMonth}>&#8249;</a>
            <h2 className='singlePage-title'> {month} </h2>
            <a href='#' className='next round' onClick={nextMonth}> &#8250; </a>
        </div>
<<<<<<< HEAD

            {/*<button onClick={()=> updateMonth(moment(new Date()).format("MMMM YYYY"))}>Current Month</button>*/}
            <HabitTracker  /> {/*moment(this.props.month).startOf("month").format("YYYYMMDD") */}
=======
        <hr />
            <button onClick={()=> updateMonth(formM_Y())}>Current Month</button>
            <HabitTracker  /> 
>>>>>>> origin
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
