

import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay, fetchCategories, fetchColors } from '../store';
import {Tasks, Events, Notes} from './';
import SVGformat from './SVGformat';
//import HabitTracker1 from './HabitTracker1';

class HabitTracker1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
        color: ["white" ,"white" ,"white" ,"white","white","white","white","white","white","white"]
    }
    this.helper1 = this.helper1.bind(this);
    this.helper2 = this.helper2.bind(this)
  }

  componentDidMount(){
    this.props.loadCategories(this.props.user.id);
  }

  helper1(id){
      console.log("test click")
      console.log("id", id)
      var newColor = this.state.color.slice();
      if(newColor[id]=== "white"){
          newColor[id] = "blue";
      }
      else{
          newColor[id] = "white";
      }
      this.setState({color: newColor})

      //this.setState({color: "blue"});
  }
  helper2(){
      return "blue";
  }

  render() {
    var fun = this.state.color
    var arr = [0,1,2,3,4,5,6,7,8,9,1]
    return (
        <div>
 
      
        
<svg width="10000" height="30">
            {arr.map((elem, indd, arrr) => {
              
                return (<rect key={indd} x={ elem * 30 } y="0" width="30" height="30" stroke="black" fill={this.state.color[indd]} onClick={() => {this.helper1(indd)}} />)
            })}
        


</svg>
      </div>
    )
  }

}
const mapState = (state) => ({
  user: state.user,
  tasks: state.tasks,
  day: state.day,
  categories: state.categories,
  colors: state.colors
});

const mapDispatch = (dispatch) => {
  return {
   loadCategories(userId) {
            dispatch(fetchCategories(userId));
            dispatch(fetchColors());

        },
  
  };
}

export default connect(mapState, mapDispatch)(HabitTracker1);

   
