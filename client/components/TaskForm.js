import React, {Component} from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import { connect } from 'react-redux';
import { fetchCatList } from '../store';

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
    handleChange(value) {
        console.log('here');
        this.setState(
          { selectedValue: value });
      }

    render(){
        const categories = this.props.categories.catList

        return (
            <div>
            here is form!
            <br />
            <input type="text" placeholder="input here" /> 

                    <RadioGroup
                      name="categories"
                      onChange={this.handleChange}>
                      {categories.map((cat, idx) => (
                        (
                          <label key={idx}>
                            <Radio value={cat.name} />{cat.name}
                          </label>
                        )))}
                    </RadioGroup>
                    <button> Add Category </button>
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
        dispatch(fetchCatList(userId));
      }
    };
  }
export default connect(mapState, mapDispatch)(TaskForm);

