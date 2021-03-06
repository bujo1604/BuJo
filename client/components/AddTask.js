import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCategories, removeCategory, fetchColors, createTask, fetchTasks } from '../store';


class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: 1
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectedCategory = this.selectedCategory.bind(this);
    }

    componentDidMount() {
        this.props.loadCategories(this.props.user.id);

    }
    handleClick(event) {
        //  const id = this.props.categories.id;
        event.preventDefault();
        this.props.removeCategory(event.target.id);
        this.props.loadCategories(this.props.user.id);

    }

    handleSubmit(event) {
        event.preventDefault();
        const newTask = {
            name: event.target.name.value,
            categoryId: this.state.categoryId,
            date: this.props.day,
            status: 'incomplete',
            userId: this.props.user.id
        }
        const userId =this.props.user.id;
        this.props.createTask(newTask, userId)

    }
    selectedCategory(event) {
        event.preventDefault();
        this.setState({ categoryId: event.target.id })

    }
    render() {

        const categories = this.props.categories;


        return (
             <div className="space-around-buttons">


                <form onSubmit={this.handleSubmit}>
                    <input className="input" name='name' type="text" placeholder="input task here" />
                    <button
                  className="button is-success"
                >

                  <span>Add</span>
                </button>
                </form>
                <div className="space-around-buttons">Select category:</div>
                {categories.map((cat, idx) => (
                    (
                        <label key={idx} className='color'>
                            <p className="button" id={cat.id} onClick={this.selectedCategory} value={cat.name} > {cat.name} <span style={{ color: `${cat.color.hex}` }}> &#x25CF;</span></p>

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
    day: state.day

})

const mapDispatch = (dispatch, ownProps) => {
    return {
        loadCategories(userId) {
            dispatch(fetchCategories(userId));


        },
        removeCategory(categoryId) {
            dispatch(removeCategory(categoryId));
        },
        createTask(newTask, userId) {
            dispatch(createTask(newTask));
             dispatch(fetchTasks(userId));
            ownProps.history.push('/day')
        }

    };
}
export default connect(mapState, mapDispatch)(AddTask);

