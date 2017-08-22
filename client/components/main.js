import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import SVGformat from './SVGformat'
import Sidebar from './'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (

    <div className='page'>
      <h1 className='page-header' >BUJO</h1>
        <aside className='page-sidebar'>
          {
            isLoggedIn
              ? <div>
                {/* The navbar will show these links after you log in */}

                <ul className="menu-list">
                <li className="is-active"> <Link to='/home'>Home</Link> </li>
                  <Link to='/settings'>Settings</Link>
                  <Link to='/insights'>Insights</Link>
                  <Link to='/day'>Day</Link>
                  <Link to='/calendar'>Calendar</Link>
                  <Link to='/futureLog'>Future-Log</Link>
                  <Link to='/reflections'>Reflections</Link>
                  <a href='#' onClick={handleClick}>Logout</a>
                  </ul>
              </div>
              : <div>
                {/* The navbar will show these links before you log in */}


                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>

              </div>

          }
        </aside>


      <div className="page-content">
      {children}
      </div>
      <div className='page-legend' >
        <div className='sideBar-container'>
          <h2 className='sideBar-legend'> LEGEND </h2>
          <hr />
          <p className='sideBar-titles'>   &#x25CB; Event  </p>
          <p className='sideBar-titles'>   &#x2613; To Do </p>
          <p className='sideBar-titles'> &#x25CF; Completed </p>
          <p className='sideBar-titles'>  &#x25AC;  Note  </p>

          <hr />
        <h2 className='sideBar-legend'> Values </h2>
        <p className='sideBar-titles'>  &#x25AC; Some random value  </p>
        </div>

        <hr />

      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
