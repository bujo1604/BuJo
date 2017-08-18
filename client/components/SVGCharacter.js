import React, { Component } from 'react';
const moment = require('moment')
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTasks, fetchEvents, fetchNotes, gotNextDay, gotPreviousDay, fetchCategories, fetchColors } from '../store';
import {Tasks, Events, Notes} from './';
import SVGformat from './SVGformat';


class SVGCharacter extends Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    this.props.loadCategories(this.props.user.id);
  }
  

  render() {
    
     const {tasks, day, user, categories} = this.props
    const countObj = {};

    const tasksCompleted = tasks.filter(function(task){
        if(task.status === "complete"){
            if(countObj[task.categoryId]){
                countObj[task.categoryId] += 1;
            }
            else{
                countObj[task.categoryId] = 1;
            }
        }
        return task.status === "complete";
    })
    var largest = ["nothing", 0]

    for(var key in countObj){
        if(!countObj.hasOwnProperty(key)) continue;
        if(countObj[key]>largest[1]){
            largest[0] = key; //will be the categoryId
            largest[1] = countObj[key]; // will be the count of the categoryId
        }
    }


    var Color = "white"
    var c1 = "white"
    var c2 = "white"
    var c3 = "white"
    //var Color = "aqua"
    for(let i = 0; i < categories.length; i++){
      
        if(categories[i].id.toString() === largest[0]){
            Color = categories[i].color.hex;
            c1 = "Gainsboro"
            c2 = "red"
            c3 = "black"
            
        }
    }
   
    
    

    return (

      <div>
        <SVGformat color={Color} c1={c1} c2={c2} c3={c3} />
      
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

export default connect(mapState, mapDispatch)(SVGCharacter);

   
