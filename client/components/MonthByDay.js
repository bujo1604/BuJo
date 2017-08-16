import React from 'react'
import moment from 'moment'
// add task component import later...
// add styled components import later ...
import { TableH } from './component-style'
import { makeArrOfDaysInMonthSunToSat, makeArrOfDaysInSingleMonth } from './dateFunctions'
import MonthDumbComp from './MonthDumbComp';

export default class MonthByDay extends React.Component {

    constructor() {
        super();
        this.state = {

            daysInMonth: [],
            currMonth: moment(new Date()).format("MMMM YYYY")

        };
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);

    }


    componentDidMount() {

        var arrDaysInMonthView = makeArrOfDaysInMonthSunToSat(this.state.currMonth)
        this.setState({ daysInMonth: arrDaysInMonthView })

    }

    nextMonth() {
        var newMonth = moment(this.state.currMonth).add(1, "month").format("MMMM YYYY");
        var arrDaysInMonthView = makeArrOfDaysInMonthSunToSat(newMonth);
        this.setState({ daysInMonth: arrDaysInMonthView, currMonth: newMonth })

    }

    prevMonth() {
        var newMonth = moment(this.state.currMonth).subtract(1, "month").format("MMMM YYYY");
        var arrDaysInMonthView = makeArrOfDaysInMonthSunToSat(newMonth);
        this.setState({ daysInMonth: arrDaysInMonthView, currMonth: newMonth })
    }
    render() {

        return (
            <div>
                <button onClick={this.prevMonth}>Prev Month</button>
                <button onClick={this.nextMonth}>Next Month</button>

                <MonthDumbComp daysInMonth={this.state.daysInMonth} month={this.state.currMonth} />

            </div>
        )
    }
}