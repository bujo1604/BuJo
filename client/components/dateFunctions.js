
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
            var day = {weekday: moment(currentDate).format("dd"), dateOfM: moment(currentDate).format("D"), date: moment(currentDate).format("YYYYMMDD")}
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
            var day = {weekday: moment(currentDate).format("dd"), dateOfM: moment(currentDate).format("D")}
            arrDaysInMonth.push(day);
        }
    }

    return arrDaysInMonth;
}

function makeArrDaysInWeek(date) {
    var arrDaysInWeek = [];
    var firstDayOfWeek = moment(date).startOf("week");
    for (let i = 0; i < 7; i++) { 

        var currentDate = new Date(moment(firstDayOfWeek).add(i, "days"));
        var day = {date: moment(currentDate).format("YYYYMMDD")}
        arrDaysInWeek.push(day);
            
    }
        return arrDaysInWeek;

}
export {makeArrOfDaysInMonthSunToSat, makeArrOfDaysInCalendarMonth, makeArrDaysInWeek}