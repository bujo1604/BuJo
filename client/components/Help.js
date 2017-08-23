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
                    <p>Bujo is a Bullet Journal inspired Task Management System.</p>
                    <p>When you complete Tasks - you will be able to see your BuJo avatar</p>
                    <p>BuJo's outfit changes co    lor based on tasks you complete</p>
                    <p>When you complete tasks, you can also refer to your insights page to learn more about where you are spending your time</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <h3  className='help-heading'>Add a Category</h3>
                    <p>First things first!: Add a category (above) & don't forget to pick a color!</p>
                    <p>Categories are meant to be important areas in your life that your tasks belong to. Examples: Self Care, Health, Learning, Social, Work, etc.</p>
                    <h3  className='help-heading'>Add Tasks, Events, and Notes on the Day View</h3>
                    <p>Once you have some categories. Please use the navigation bar to go to the Day view</p>
                    <p>On the day view you can add and delete tasks for a specific day</p>
                    <p>Tasks default to incomlete. when you complete a task, click the "bullet" on the right to update the task to complete</p>
                    <p>You can also add notes and Events</p>
                    <p></p>
                    <h3  className='help-heading'>Check out the Month View</h3>
                    <p>On the month view you can see the "bullets" for your tasks and events for the month</p>
                    <h3  className='help-heading'>Complete Some tasks to See Your BuJo avatar and your insights!</h3>
                    <p>Once you have completed a few tasks, you can redirect to home to see your BuJo avatar and to Insights to see the data visualization for your completed tasks</p>

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

