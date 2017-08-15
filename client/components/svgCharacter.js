

import React from 'react'
import moment from 'moment'
import Week from './Week'
// add task component import later...
// add styled components import later ...
import { TableH } from './component-style'



export default class svgCharacter extends React.Component {

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
       <h1>Hello From BuJo!</h1>
      <svg width="300" height="300">
            
            <rect x="0" y="0" width="300" height="300" fill="white" />
            <ellipse cx="200" cy="145" rx="8" ry="100" fill="Gainsboro" transform = "rotate(45 200 145)" />
            <ellipse cx="100" cy="145" rx="8" ry="100" fill="Gainsboro" transform = "rotate(-45 100 145)" />
            <ellipse cx="175" cy="210" rx="10" ry="50" fill="Gainsboro" /> 
            <ellipse cx="125" cy="210" rx="10" ry="50" fill="Gainsboro" />

            <ellipse cx="150" cy="125" rx="50" ry="45" fill="Gainsboro" />
            <rect x="100" y="125" width="100" height="100" fill="pink" />
            
            <ellipse cx="150" cy="125" rx="50" ry="10" fill="Gainsboro" />
            <ellipse cx="150" cy="225" rx="50" ry="10" fill="pink" />
            <ellipse cx="100" cy="175" rx="10" ry="50" fill="pink" />
            <ellipse cx="200" cy="175" rx="10" ry="50" fill="pink" />
            <circle cx="175" cy="120" r="3" fill="red"/>
            <circle cx="125" cy="120" r="3" fill="red"/>
            <line x1="147" y1="125" x2="153" y2="125" stroke="black"  />
            <line x1="170" y1="105" x2="180" y2="105" stroke="black"  />
            <line x1="120" y1="105" x2="130" y2="105" stroke="black"  />
           <ellipse cx="200" cy="145" rx="10" ry="50" fill="pink" transform = "rotate(45 200 145)" />
             <ellipse cx="100" cy="145" rx="10" ry="50" fill="pink" transform = "rotate(-45 100 145)" />
            
            
        </svg>
        </div>


  )
  }

}