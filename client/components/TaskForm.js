import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchCategories, removeCategory, fetchColors } from '../store';
import CategoryForm from './CategoryForm';

class TaskForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.loadCategories(this.props.user.id);

    }
     handleClick(event) {
        //  const id = this.props.categories.id;
        event.preventDefault();
        console.log("print",event.target.id)
        this.props.removeCategory(event.target.id);
        this.props.loadCategories(this.props.user.id);

  }

    render(){
         const colors = this.props.colors;
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
                            <button style={{color: `${cat.color.hex}`}} value={cat.name} > {cat.name}</button>  <span style={{ color: `${cat.color.hex}` }}> &#x25CF;</span><button id={cat.id} onClick={this.handleClick}>delete</button>
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

      },
      removeCategory(categoryId){
          dispatch(removeCategory( categoryId));
      }

    };
  }
export default connect(mapState, mapDispatch)(TaskForm);

