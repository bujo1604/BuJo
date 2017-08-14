import React from 'react'
import { connect } from 'react-redux'
import Pie from './pie'
import Scatter from './scatter'

//COMPONENT

export const Insights = (props) => {
  const { email } = props

  return (
    <div>
      <h3>Hi, {email}</h3>
      <p> Here are your insights </p>
      <div className='flexbox-container'>
        <Pie />
        <Scatter />
      </div>
    </div>
  )
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Insights)

