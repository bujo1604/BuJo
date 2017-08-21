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
      <h1 className='header'><p className='p'>BUJO</p> <a href="#"><i className="fa fa-trash"></i></a> </h1>
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
            : <ul>
              {/* The navbar will show these links before you log in */}

                <li>
              <Link to='/login'>Login</Link>
              </li>
                <li>
              <Link to='/signup'>Sign Up</Link>
              </li>


            </ul>

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
