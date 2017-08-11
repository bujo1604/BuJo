import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = (props) => {

    return (
        <div> HI
        <div>
    <BigCalendar
      events={[]}
      startAccessor='2017 08 01'
      endAccessor='2017 08 31'
    />
  </div>
        </div>

    )
};


 export default MyCalendar;
