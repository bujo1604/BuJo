import React, {Component} from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import { connect } from 'react-redux';
import { fetchCatList, createCat, fetchColors } from '../store';
console.log("FETCH", fetchColors)
class TaskForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedValue: '',
            newCategory: false,
            name: '',
            colorId: 1,
            colors:[]
        }
        this.renderForm = this.renderForm.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.loadCategories(this.props.user.id);

    }

    handleColorChange(event) {
        event.preventDefault();
        this.setState(
          {color: event.target.value });
      }
    handleNameChange(event){
         event.preventDefault();
         this.setState(
          {name: event.target.value });
    }

    renderForm(event){
       event.preventDefault();
       this.setState(
           {newCategory: true});
       }

    handleSubmit(event) {
        event.preventDefault();
        const category = {
            name: this.state.name,
            colorId: this.state.colorId,
            userId: this.props.user.id
        };
        this.props.createCat(category);
  }

    render(){
        const colors = this.props.colors;
        const categories = this.props.categories.catList;

    console.log("CATEGORY", categories)
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

                    <button onClick={this.renderForm}> Add Category </button>
                    <br />
                    {this.state.newCategory ? (
                        <div>

                        <input onChange ={this.handleNameChange} type="text" placeholder="input category here"/>
                        <div className="form-control">
                  <select className='color' onClick={this.handleColorChange}>
                  {
                   colors.map(color => (
                        <option key={color.id} value={color.id}>{color.hex}</option>
                    ))
                }
                                  </select>
                              </div>
                         <button onSubmit={this.handleSubmit}> Add</button>
                        </div>
                    ) : null}

            </div>
        )
    }
}
const mapState = (state) => ({
    user: state.user,
    categories: state.categories,
    colors: state.colors
})

const mapDispatch = (dispatch) => {
    return {
      loadCategories(userId) {
        dispatch(fetchCatList(userId));
        dispatch(fetchColors());

      },
      createCat(category, userId){
          dispatch(createCat(category, userId));
      }

    };
  }
export default connect(mapState, mapDispatch)(TaskForm);

