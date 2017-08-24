import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../store';


class Help extends Component {

  constructor(props) {
    super(props);
  }




  render() {

    return (
       <div className="space-around-buttons">
       <div className='help'>
                    <h1 className='help-heading'>Need Help Getting Started?</h1>
                    <h3  className='help-heading'>Welcome to Bujo!</h3>
                    <h5>Bujo is a Bullet Journal inspired Task Management System.</h5>
                    <h5>When you complete Tasks - you will be able to see your BuJo avatar</h5>
                    <h5>BuJo's outfit changes co    lor based on tasks you complete</h5>
                    <h5>When you complete tasks, you can also refer to your insights page to learn more about where you are spending your time</h5>

                    <h3  className='help-heading'>Add a Category</h3>
                    <h5>First things first!: Add a category (above) & don't forget to pick a color!</h5>
                    <h5>Categories are meant to be important areas in your life that your tasks belong to. Examples: Self Care, Health, Learning, Social, Work, etc.</h5>
                    <h3  className='help-heading'>Add Tasks, Events, and Notes on the Day View</h3>
                    <h5>Once you have some categories. Please use the navigation bar to go to the Day view</h5>
                    <h5>On the day view you can add and delete tasks for a specific day</h5>
                    <h5>Tasks default to incomlete. when you complete a task, click the "bullet" on the right to update the task to complete</h5>
                    <h5>You can also add notes and Events</h5>

                    <h3  className='help-heading'>Check out the Month View</h3>
                    <h5>On the month view you can see the "bullets" for your tasks and events for the month</h5>
                    <h3  className='help-heading'>Complete Some tasks to See Your BuJo avatar and your insights!</h3>
                    <h5>Once you have completed a few tasks, you can redirect to home to see your BuJo avatar and to Insights to see the data visualization for your completed tasks</h5>

                    </div>
     </div>
    )
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => {
  return {

  };
}

export default connect(mapState, mapDispatch)(Help);

