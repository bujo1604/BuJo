import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-style'
import Week from './Week';
import Month from './Month';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = (props) => {

    return (
        <div>
        <div>
    {/* <BigCalendar
      events={[]}
      startAccessor='2017 08 01'
      endAccessor='2017 08 31'
    /> */}
    {/*<Week date={"2017 08 01"} /> */}
     <Month />
  </div>
        </div>

    )
};


 export default MyCalendar;

