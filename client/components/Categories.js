import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom';
import { fetchCategories, removeCategory } from '../store';
//for some reason AddCategory can't be imported from index
import AddCategory from './AddCategory';


class Categories extends Component {
    render() {
        const categories = this.props.categories;
        return (
            <div>
                <h2 className="content-title">Categories</h2>
                {categories.map((cat, idx) => (
                    <label key={idx} className='color'>
                        <button
                            className="button"
                            id={cat.id}
                            onClick={this.selectedCategory}
                            value={cat.name} > {cat.name}
                            <span
                                style={{ color: `${cat.color.hex}` }}> &#x25CF;
                            </span>
                        </button>
                        {/*
                            <button id={cat.id} onClick={this.handleClick}>delete</button>
                            */}
                    </label>
                ))}
                <AddCategory />
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user,
    categories: state.categories,

});

const mapDispatch = (dispatch) => {
    return {
        loadCategories(userId) {
            dispatch(fetchCategories(userId));


        },
        removeCategory(categoryId) {
            dispatch(removeCategory(categoryId));
        }
    };
}
export default connect(mapState, mapDispatch)(Categories);
