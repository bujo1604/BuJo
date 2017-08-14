import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Radio, RadioGroup} from 'react-radio-group';
const moment = require('moment')
import { connect } from 'react-redux';
import { fetchCatList, fetchTaskList, fetchEventList} from '../store';



class SingleDay extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedValue: ''
    }
    // this.getAllCategories = this.getAllCategories.bind(this);

  }

  componentDidMount(){
    this.props.loadData();
  }

  handleChange(value) {
    console.log('here');
    this.setState(
      {selectedValue: value});
  }

//radio buttons currently not working 



  render(){
      //here we will get the events and the tasks are present for that day
      // probs as props 
const categories = this.props.categories.catList
const tasks = this.props.tasks.taskList
const events = this.props.events.eventList
  //  console.log(this.props.categories.catList, 'here');

    return (
          <div className="singlePage-container">
          This is the single day view. 
          <h2 className= "singlePage-title"> {moment().format("dddd, MMMM Do YYYY")} </h2>
          <input type="text"  placeholder="input event here" /> <br/> <br/>
          <input type="text"  placeholder="input task here" />

          <RadioGroup
            name="categories"
            onChange={this.handleChange}>
            {categories.map((cat, idx) => (
              (
                <label key={idx}>
                  <Radio value={cat.name} />{cat.name}
                </label>
              )))}
          </RadioGroup>
        
          <Link to={'/events'}> <h3 className="singleName-headings">Events</h3></Link>
           {tasks.map((item, idx) => (
            (<li key={idx}>
              <div className='tasks-titles'>
               {item.name} <br />
               <button>{item.status} </button>
              </div>
            </li>)
          ))}

          <Link to={'/tasks'}> <h3 className="singleName-headings">Tasks</h3></Link>
          {events.map((item, idx) => (
            (<div key={idx}>
              <li className='tasks-titles'>
               {item.name} <br />
               {item.location} <br />
               {item.time}  <br />
              </li>
            </div>)
          ))}
        
        </div>
      ) ;
  }
}


const mapState = (state) => ({
  categories: state.categories,
  tasks: state.tasks,
  events: state.events
});

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(fetchCatList());
      dispatch(fetchTaskList());
      dispatch(fetchEventList());
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);


