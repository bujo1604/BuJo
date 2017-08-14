import React from 'react'
import moment from 'moment'
// add task component import later...
// add styled components import later ...
// For use within the month View

export default class Week extends React.Component {

    constructor (props) {
    super(props);
    this.state = {
      date: moment(this.props.date).startOf("week").toString(),
      days: [],
      daysWithTasks: [],
      tasks: [{title: "Feed the pups", category: "Chore", date: moment("2017 08 15").startOf("day").toString()},{title: "Visit Rebecca", category: "social", date: moment("2017 08 16").startOf("day").toString() }]
    };
    this.nextWeek = this.nextWeek.bind(this);
  }


  componentDidMount () {

    this.setState({date: moment(this.props.date).startOf("week").toString()})
    var array = [];
    for(let i = 0; i < 7; i++){
        var day = moment(this.state.date).add(i,"day").startOf("day").toString();
        array.push(day);
    }
    this.setState({days: array})
    
    
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
    console.log(this.state.days, "this.state.days")
  return (
      <div>
       
      
      {/*<button onClick={this.nextWeek}>Next Week</button> */}
       
       
       <div>
       <div>{this.state.days.map((elem)=>{
           
           return (
               <div>
                    <p>{moment(elem).format("D")}</p>
                    <p>{moment(elem).format("dd")}</p>
                    {/* <Task date={elem} /> */}
                </div>
            )
       })}</div>
        </div>
        </div>
     
    
  )
  }

}
