import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchCategories, addNewCategory, fetchColors } from '../store';
import CategoryForm from './CategoryForm';
console.log("FETCH", fetchColors)
class TaskForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: ''
        }
    }

    componentDidMount(){
        this.props.loadCategories(this.props.user.id);

    }

    render(){
        // const colors = this.props.colors;
        const categories = this.props.categories;

    // console.log("CATEGORY", categories)
        return (
            <div>
            here is form!
            <br />
            <input type="text" placeholder="input task here" />


                     {categories.map((cat, idx) => (
                        (
                          <label key={idx} className='color'>
                            <button style={{color: `${cat.color.hex}`}} value={cat.name} > {cat.name}</button>  <span style={{ color: `${cat.color.hex}` }}> &#x25CF;</span>
                          </label>
                        )))}

                <CategoryForm />
            </div>
        )
    }
}
const mapState = (state) => ({
    user: state.user,
    categories: state.categories

})

const mapDispatch = (dispatch) => {
    return {
      loadCategories(userId) {
        dispatch(fetchCategories(userId));


      }

    };
  }
export default connect(mapState, mapDispatch)(TaskForm);

