import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { makeArrOfDaysInMonthSunToSat } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';
import {  fetchFutureTasks, fetchFutureTasksRange } from '../store'
import { makeArrMonthsInYear } from './dateFunctions'
import { gotNextYear, gotPreviousYear, updatedYear } from '../store'
import TaskWords from './TaskWords'


class FutureTasks extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.loadDataFuture(this.props.user.id, this.props.year, moment(this.props.year).endOf("year").format("YYYYMMDD"));

    }


    render() {
   
        const {user, future, month, year, previousYear, nextYear, updateYear} = this.props;
        const monthsInYear = makeArrMonthsInYear(year);
      
        var filterF = [];
        for(let i = 0; i<12; i++){
            filterF.push([]);
        }
        
    for (let i = 0; i < future.length; i++){
        var taskDate = future[i].FutureMonth;
        let index = monthsInYear.indexOf(taskDate);
        
            if (index !== -1){
                filterF[index].push(future[i]);
            }
    }
        
        return (
            <div>
            <button onClick={previousYear}>Previous Year</button>
            <h1>{moment(year).format("YYYY")}</h1>
            <button onClick={nextYear}>Next Year</button>
            <div>
            {monthsInYear.map((monthInArr, ind)=>{
                
                return (<div key={Math.random()}><h3>{moment(monthInArr).format("MMMM")}</h3>
                    <TaskWords tasks={filterF[ind]} />
                    </div>
                )
            })}
            </div>
          
            </div>

        )
    }
}

const mapState = (state) => ({
    user: state.user,
    future: state.future,
    month: state.month, 
    year: state.year
});

const mapDispatch = (dispatch) => {
    return {
        loadDataFuture(userId, start, end) {
            dispatch(fetchFutureTasksRange(userId, start, end));
        },
        nextYear() {
            dispatch(gotNextYear())  // to be used in on click
        },
        previousYear() {
            dispatch(gotPreviousYear()) // to be used in on click
        },
        updateYear(year){
            dispatch(updatedYear(year))
        }
    };
}


export default connect(mapState, mapDispatch)(FutureTasks);