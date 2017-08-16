import React, {Component} from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import { connect } from 'react-redux';
import { fetchCategories, addNewCategory, fetchColors } from '../store';
import CategoryForm from './CategoryForm';
console.log("FETCH", fetchColors)
class TaskForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: '',

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

                    <RadioGroup
                      name="categories">
                     {categories.map((cat, idx) => (
                        (
                          <label key={idx} className='color'>
                            <Radio value={cat.name} /> {cat.name} {cat.color.hex}
                          </label>
                        )))}
                    </RadioGroup>

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

