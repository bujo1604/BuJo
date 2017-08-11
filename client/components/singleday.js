import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Radio, RadioGroup} from 'react-radio-group';
const moment = require('moment')



class SingleDay extends Component{

  constructor(props){
    super(props);
    this.state = {
      day: {}
    };
  }

// function getAllCategories(){
//     const categories = this.props.categories
//     categories.map((category, idx) =>  
//             <Radio value="{category.name}" /> { category.name }
// )}

//need to include store 
  render(){
      //here we will get the events and the tasks are present for that day
      // probs as props 
    return (
          <div className="singlePage-container">
          This is the single day view. 
          <h2 className= "singlePage-title"> {moment().format("dddd, MMMM Do YYYY")} </h2>
          <input type="text"  placeholder="input event here" /> <br/> <br/>
          <input type="text"  placeholder="input task here" />
          <RadioGroup name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
            <Radio value="apple" /> Self Care
            <Radio value="orange" />Home
            <Radio value="watermelon" />Learning
        </RadioGroup>
          <Link to={'/events'}> <h3 className="singleName-headings">Events</h3></Link>
          <Link to={'/tasks'}> <h3 className="singleName-headings">Tasks</h3></Link>
        </div>
      ) ;
  }
}




export default SingleDay;
