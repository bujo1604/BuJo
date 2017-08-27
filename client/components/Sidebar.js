import React from 'react'
import LegendCategories from './LegendCategories'
import Legend from './Legend'


const Sidebar = (props) => {
    return (
        <div className='sideBar'>
            <Legend />
            <LegendCategories />
        </div>

    )
}

export default Sidebar;
