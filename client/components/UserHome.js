import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SVGCharacter from './SVGCharacter'
import moment from 'moment'
/**
 * COMPONENT
 */

 function colorPick(){
  return "blue";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



export const UserHome = (props) => {
  const {email, month} = props

  const colorR = getRandomColor();
  return (
    <div>
    

    <div>
    <h3>Welcome, {email} --- It is {moment(new Date()).format("dddd, MMMM Do YYYY")}</h3>
   

      <SVGCharacter />
    </div>
    <p>Are You Just getting started with BuJo? - Checkout the Getting Started information in Settings!</p>
    <div>
    
    </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    month: state.month
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

