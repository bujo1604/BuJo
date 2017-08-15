
import moment from 'moment'

function makeArrOfDaysInMonthSunToSat(date) {
    var arrDaysInMonthView = [];
    var firstOfTheMonth = moment(date).startOf("month");
    var firstDayOfView = firstOfTheMonth.startOf("week")
    var firstDayOfViewStr = firstDayOfView.toString();
    var lastDayOfView = moment(date).endOf("month").endOf("week").startOf("day"); 
    var lastDayOfViewDate = new Date(lastDayOfView);

    for (let i = 0; i < 37; i++) { 

        var currentDate = new Date(moment(firstDayOfViewStr).add(i, "days"));
        

        if (currentDate <= lastDayOfViewDate) {
            var day = {weekday: moment(currentDate).format("dd"), date: moment(currentDate).format("D")}
            arrDaysInMonthView.push(day);
            
        }
    }
        return arrDaysInMonthView;

}

function makeArrOfDaysInCalendarMonth(date) {
    var arrDaysInMonth = [];
    var firstOfTheMonth = moment(date).startOf("month");
    var firstDayOfMonthStr = firstOfTheMonth.toString();
    var lastDayOfMonth = moment(date).endOf("month").startOf("day");
    var lastDayOfMonthDate = new Date(lastDayOfMonth);

    for (let i = 0; i < 31; i++) {

        var currentDate = new Date(moment(firstDayOfMonthStr).add(i, "days"));
        

        if (currentDate <= lastDayOfMonthDate) {
            var day = {weekday: moment(currentDate).format("dd"), date: moment(currentDate).format("D")}
            arrDaysInMonth.push(day);
        }
    }

    return arrDaysInMonth;
}

export {makeArrOfDaysInMonthSunToSat, makeArrOfDaysInCalendarMonth}