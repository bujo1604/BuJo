import React from 'react'


const Sidebar = (props) => {
    return (
        <div>
            <div className='content-title-left'> Legend </div>
            <div>
                <div>
                    <span> &#x25AC;</span>
                    <span> Event </span>
                </div>
                <div>
                    <span> &#x25CF;</span>
                    <span>  To Do </span>
                </div>
                <div>
                    <span> &#x2613;</span>
                    <span>  Completed </span>
                </div>
                <div>
                    <span> &#x25AC;</span>
                    <span>  Note  </span>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;
