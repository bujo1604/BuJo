import React from 'react'
import moment from 'moment'
import Week from './Week'
// add task component import later...
// add styled components import later ...

export default class Month extends React.Component {

    constructor () {
    super();
    this.state = {
      date: moment(new Date()).startOf("month").startOf("week").toString(),
      weeks: [],
      daysWithTasks: [],
      tasks: [{title: "Feed the pups", category: "Chore", date: moment("2017 08 15").startOf("day").toString()},{title: "Visit Rebecca", category: "social", date: moment("2017 08 16").startOf("day").toString() }]
    };
    
  }


  componentDidMount () {

    this.setState({date: moment(new Date()).startOf("month").startOf("week").toString()})
    var array = [];
    var lastWeekOfView = moment(new Date()).endOf("month").startOf("week").startOf("day");
    var weekStartDate = new Date(moment(this.state.date));
    var lastWeekOfViewDate = new Date(moment(new Date()).endOf("month").startOf("week").startOf("day"))
    let weekCount = 0;
    
    console.log("Last week of view", lastWeekOfView)
    console.log(lastWeekOfViewDate, "last Week of View Date")
    console.log(weekStartDate, "week start date")
    console.log(lastWeekOfViewDate - weekStartDate, "difference");
     console.log(lastWeekOfViewDate >= weekStartDate, "bool");

     for(let i = 0; i < 5; i++){
         var currentWeekDate = new Date(moment(this.state.date).add(i,"week").startOf("day"));
         var currentWeekStr = currentWeekDate.toString();
         if(currentWeekDate <= lastWeekOfViewDate){
             array.push(currentWeekStr);
         }
     }
    
    /*for (var week = weekStart; week <= lastWeekOfView; week = week.add("week")){


        var weekInside = moment(this.state.date).add(weekCount,"week").startOf("day").toString();
        weekCount += 1;
        array.push(weekInside);
       
    }
    */
    /*
    for(let i = 0; i < 4; i++){
        var week = moment(this.state.date).add(i,"week").startOf("day").toString();
        array.push(week);
    }
    */
    this.setState({weeks: array})
    
    
    //this.setState({days: array})


}

  nextWeek () {
      /*
      console.log("inside of Change week")
      var updatedDate = moment(this.state.date).add(1,'week').startOf('week').toString();
      console.log("inside of change week - updatedDate", updatedDate)
      this.setState({date: updatedDate})
        var array = [];
    for(let i = 0; i < 7; i++){
        var day = moment(updatedDate).add(i,"day").toString();
        array.push(day)
    }
    this.setState({days: array})
    */
    }

  render (){
    //console.log(this.state.days, "this.state.days")
  return (
      <div>
       
      
      {/*<button onClick={this.nextWeek}>Next Week</button> */}
       
       
       <div>
       
       <div>{this.state.weeks.map((elem)=>{
           
           return (
               <div>
                   <Week date={elem} />
                    
                </div>
            )
       })} </div> 
        </div>
        </div>
     
    
  )
  }

}
