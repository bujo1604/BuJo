import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Radio, RadioGroup} from 'react-radio-group';
const moment = require('moment')
import { connect } from 'react-redux';
import { fetchCatList } from '../store';



class SingleDay extends Component{

  constructor(props){
    super(props);
    this.state ={
      selectedValue: ''
    }

    // this.getAllCategories = this.getAllCategories.bind(this);

  }

  componentDidMount(){
    this.props.loadCategories();
  }



//need to include store 
  render(){
      //here we will get the events and the tasks are present for that day
      // probs as props 
const categories = this.props.categories.catList
   console.log(this.props.categories.catList, 'here');

    return (
          <div className="singlePage-container">
          This is the single day view. 
          <h2 className= "singlePage-title"> {moment().format("dddd, MMMM Do YYYY")} </h2>
          <input type="text"  placeholder="input event here" /> <br/> <br/>
          <input type="text"  placeholder="input task here" />

          {categories.map((cat, idx) => (
            (<div key={idx}>
              <div className='categories-titles'>
               {cat.name}
              </div>
            </div>)
          ))}
        
          <Link to={'/events'}> <h3 className="singleName-headings">Events</h3></Link>
          <Link to={'/tasks'}> <h3 className="singleName-headings">Tasks</h3></Link>
        </div>
      ) ;
  }
}


const mapState = (state) => ({
	categories: state.categories
});

const mapDispatch = (dispatch) => {
  return {
    loadCategories() {
      dispatch(fetchCatList());
    }
  };
}

export default connect(mapState, mapDispatch)(SingleDay);


