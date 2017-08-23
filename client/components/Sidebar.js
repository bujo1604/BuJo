import React from 'react'
import Categories from './Categories'
import Legend from './Legend'


const Sidebar = (props) => {
    return (
        <div className='sideBar'>
            <Legend />
            <Categories />
        </div>

    )
}

export default Sidebar;
