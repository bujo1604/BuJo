import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import { Card, FlexParent, CharacterImg, CardText, Title } from './component-style'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = (props) => {

    return (
<FlexParent>

    <BigCalendar
      events={[]}
      startAccessor='2017 08 01'
      endAccessor='2017 08 31'
    />

</FlexParent>

    )
};


 export default MyCalendar;

