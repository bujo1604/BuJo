import React from 'react'
import moment from 'moment'
import Week from './Week'
// add task component import later...
// add styled components import later ...
import { TableH } from './component-style'



export default class Month extends React.Component {

    constructor () {
    super();
    this.state = {
      date: moment(new Date()).startOf("month").startOf("week").toString(),
      firstOfTheMonth: moment(new Date()).startOf("month").toString(),
      month: moment(new Date()).format("MMMM YYYY"),
      weeks: [],
      daysWithTasks: [],
      tasks: [{title: "Feed the pups", category: "Chore", date: moment("2017 08 15").startOf("day").toString()},{title: "Visit Rebecca", category: "social", date: moment("2017 08 16").startOf("day").toString() }]
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);

  }


  componentDidMount () {

    this.setState({date: moment(new Date()).startOf("month").startOf("week").toString()})
    var array = [];
    var lastWeekOfView = moment(new Date()).endOf("month").startOf("week").startOf("day");
    var weekStartDate = new Date(moment(this.state.date));
    var lastWeekOfViewDate = new Date(moment(new Date()).endOf("month").startOf("week").startOf("day"))
    let weekCount = 0;


     for(let i = 0; i < 5; i++){
         var currentWeekDate = new Date(moment(this.state.date).add(i,"week").startOf("day"));
         var currentWeekStr = currentWeekDate.toString();
         if(currentWeekDate <= lastWeekOfViewDate){
             array.push(currentWeekStr);
         }
     }
    this.setState({weeks: array})


}

  nextMonth () {
      var FirstMonth = moment(this.state.firstOfTheMonth).add(1,"month").startOf("month").toString();
      var newDay = moment(FirstMonth).startOf("week").toString();
    //   console.log(newDay, "NewDay")
    //   console.log(FirstMonth, "firstOfTheMonth")
        this.setState({date: newDay, firstOfTheMonth: FirstMonth});

    this.setState({month: moment(FirstMonth).format("MMMM YYYY")});
    var array = [];
    var lastWeekOfView = moment(FirstMonth).endOf("month").startOf("week").startOf("day");
    var weekStartDate = new Date(moment(newDay));
    var lastWeekOfViewDate = new Date(moment(FirstMonth).endOf("month").startOf("week").startOf("day"))
    let weekCount = 0;

     for(let i = 0; i < 5; i++){
         var currentWeekDate = new Date(moment(newDay).add(i,"week").startOf("day"));
         var currentWeekStr = currentWeekDate.toString();
         if(currentWeekDate <= lastWeekOfViewDate){
             array.push(currentWeekStr);
         }
     }

    this.setState({weeks: array})
    }

    prevMonth () {
      var FirstMonth = moment(this.state.firstOfTheMonth).subtract(1,"month").startOf("month").toString();
      var newDay = moment(FirstMonth).startOf("week").toString();
    //   console.log(newDay, "NewDay")
    //   console.log(FirstMonth, "firstOfTheMonth")
        this.setState({date: newDay, firstOfTheMonth: FirstMonth});

    this.setState({month: moment(FirstMonth).format("MMMM YYYY")});
    var array = [];
    var lastWeekOfView = moment(FirstMonth).endOf("month").startOf("week").startOf("day");
    var weekStartDate = new Date(moment(newDay));
    var lastWeekOfViewDate = new Date(moment(FirstMonth).endOf("month").startOf("week").startOf("day"))
    let weekCount = 0;

     for(let i = 0; i < 5; i++){
         var currentWeekDate = new Date(moment(newDay).add(i,"week").startOf("day"));
         var currentWeekStr = currentWeekDate.toString();
         if(currentWeekDate <= lastWeekOfViewDate){
             array.push(currentWeekStr);
         }
     }

    this.setState({weeks: array})
    }
  render (){
    //console.log(this.state.days, "this.state.days")\
    // console.log(this.state.weeks, "weeks array")
  return (
      <div>
       <h1>{this.state.month}</h1>

      {/*<button onClick={this.nextWeek}>Next Week</button> */}
       <button onClick={this.prevMonth}>Previous Month</button>
       <button onClick={this.nextMonth}>Next Month</button>

       <div>
        <table className='table'>
        <thead>
          <tr>
            <TableH>Date</TableH>
            <TableH>Event</TableH>
            <TableH>Task</TableH>
          </tr>
          </thead>
       <tbody>

       <div key={this.state.weeks[0]}>{this.state.weeks.map((elem)=>{

           return (
               <div key={elem}>
                   <Week date={elem} />

                </div>
            )
       })} </div>
          </tbody>
      </table>
        </div>
        </div>


  )
  }

}
