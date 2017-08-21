import React from 'react'


const Sidebar = (props) => {
    return (
        <div className='sideBar-container'>
            <h2> Legend </h2>
            <hr />
            <span> &#x25AC;</span>
            <h3 className='sideBar-titles'> Event </h3>
            <span> &#x2613;</span>
            <h3 className='sideBar-titles'>  To Do </h3>
            <span> &#x25CF;</span>
            <h3 className='sideBar-titles'>  Completed </h3>
            <span> &#x25AC;</span>
            <h3 className='sideBar-titles'>  Note  </h3>
        </div>

    )
}

export default Sidebar;
