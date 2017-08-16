import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchCategories, addNewCategory, fetchColors } from '../store';

class CategoryForm extends Component {
    constructor(props){
        super(props)
        this.state = {

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
         console.log("print",category)
        this.props.addNewCategory(category, this.props.user.id);
  }

    render(){
        const colors = this.props.colors;


    // console.log("CATEGORY", categories)
        return (
            <div>


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
                         <button onClick={this.handleSubmit}> Add</button>
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
        dispatch(fetchCategories(userId));
        dispatch(fetchColors());

      },
      addNewCategory(category, userId){
          dispatch(addNewCategory(category, userId));
      }

    };
  }
export default connect(mapState, mapDispatch)(CategoryForm);

