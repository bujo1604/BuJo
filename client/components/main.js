import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import SVGformat from './SVGformat'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div className='main-div'>
      <h1 className='header'>BUJO</h1>
      <ul>
        {
          isLoggedIn
            ? <div className='table' >
              {/* The navbar will show these links after you log in */}
              <li>
              <Link to='/home'>Home</Link>
               </li>
                <li>
              <Link to='/settings'>Settings</Link>
              </li>
                <li>
              <Link to='/insights'>Insights</Link>
              </li>
                <li>
              <Link to='/day'>Day</Link>
              </li>
                <li>
              <Link to='/calendar'>Calendar</Link>
              </li>
                <li>
              <Link to='/futureLog'>Future-Log</Link>
              </li>
                <li>
              <a href='#' onClick={handleClick}>Logout</a>
              </li>

            </div>
            : <div>
              {/* The navbar will show these links before you log in */}

              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>

            </div>

        }
      </ul>

      <div className='content'>
      {children}
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
