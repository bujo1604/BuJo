import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCategories, removeCategory} from '../store';
import CategoryForm from './CategoryForm';
import Link from 'react-router-dom';
class Settings extends Component {
    render() {
        const categories = this.props.categories;
        return (
            <div>
            <CategoryForm />
                {categories.map((cat, idx) => (
                    (
                        <label key={idx} className='color'>
                            <button id={cat.id} onClick={this.selectedCategory}  value={cat.name} > {cat.name} <span style={{ color: `${cat.color.hex}` }}> &#x25CF;</span></button>
                            
                            {/*
                            <button id={cat.id} onClick={this.handleClick}>delete</button>
                            */}
                        </label>
                    )))}
                    
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
export default connect(mapState, mapDispatch)(Settings);
