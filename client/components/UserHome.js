import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
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
      <h3>Welcome, {email} --- It is {month}</h3>
        <svg width="300" height="300">

            <rect x="0" y="0" width="300" height="300" fill="white" />
            <ellipse cx="200" cy="145" rx="8" ry="100" fill="Gainsboro" transform = "rotate(45 200 145)" />
            <ellipse cx="100" cy="145" rx="8" ry="100" fill="Gainsboro" transform = "rotate(-45 100 145)" />
            <ellipse cx="175" cy="210" rx="10" ry="50" fill="Gainsboro" />
            <ellipse cx="125" cy="210" rx="10" ry="50" fill="Gainsboro" />

            <ellipse cx="150" cy="125" rx="50" ry="45" fill="Gainsboro" />
            <rect x="100" y="125" width="100" height="100" fill={colorR} />

            <ellipse cx="150" cy="125" rx="50" ry="10" fill="Gainsboro" />
            <ellipse cx="150" cy="225" rx="50" ry="10" fill={colorR} />
            <ellipse cx="100" cy="175" rx="10" ry="50" fill={colorR} />
            <ellipse cx="200" cy="175" rx="10" ry="50" fill={colorR} />
            <circle cx="175" cy="120" r="3" fill="red"/>
            <circle cx="125" cy="120" r="3" fill="red"/>
            <line x1="147" y1="125" x2="153" y2="125" stroke="black"  />
            <line x1="170" y1="105" x2="180" y2="105" stroke="black"  />
            <line x1="120" y1="105" x2="130" y2="105" stroke="black"  />
           <ellipse cx="200" cy="145" rx="10" ry="50" fill={colorR} transform = "rotate(45 200 145)" />
             <ellipse cx="100" cy="145" rx="10" ry="50" fill={colorR} transform = "rotate(-45 100 145)" />


        </svg>

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

