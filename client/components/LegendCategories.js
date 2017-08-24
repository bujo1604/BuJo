import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => {
    const { categories } = props
    return (
        <div>
        <div className='content-title-left'> Values </div>
            <div >
                {categories.map((category, i) => {
                    return (
                        <div key={i}>
                            <span
                                style={{ color: `${category.color.hex}` }} display="inline"> &#x25CF;
                                </span>
                            <span> {category.name} </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapState = (state) => ({
    categories: state.categories,
});

export default connect(mapState)(Categories);


