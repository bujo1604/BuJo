import React from 'react'
import {connect} from 'react-redux'
import {VictoryPie} from 'victory'

//COMPONENT

export const Chart = (props) => {

  return (
    <div>
      <h1> chart </h1>
      <VictoryPie />
    </div>
  )
}

//CONTAINER

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Chart);



