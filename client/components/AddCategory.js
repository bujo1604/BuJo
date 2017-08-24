import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchCategories, addNewCategory, fetchColors } from "../store";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategory: false,
      name: "",
      colorId: 1,
      colors: []
    };

    this.renderForm = this.renderForm.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadCategories(this.props.user.id);
  }

  handleColorChange(event) {
    event.preventDefault();
    this.setState({ colorId: event.target.value });
  }
  handleNameChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  renderForm(event) {
    event.preventDefault();
    this.setState({ newCategory: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ name: "" });
    const category = {
      name: this.state.name,
      colorId: this.state.colorId,
      userId: this.props.user.id
    };
    this.setState({ newCategory: false });
    this.props.addNewCategory(category, this.props.user.id);
  }

  render() {
    const colors = this.props.colors;

    return (
      <div className='space'>
      <div className='space-around-buttons'>
        {!this.state.newCategory && <a className="button is-primary" onClick={this.renderForm}>
          Add Category
        </a>}
        </div>
        <br />
        {this.state.newCategory
          ? <div className='space'>
              <input className="input"
                onChange={this.handleNameChange}
                value={this.state.name}
                type="text"
                placeholder="input category here"
              />
              <div className="form-control">
                <div className="color">
                  <div>Select color:</div>
                  {colors.map(color =>

                    <button
                      className='button'
                      onClick={this.handleColorChange}
                      key={color.id}
                      value={color.id}
                      style={{ color: `${color.hex}` }}
                    >
                      {" "}&#x25CF;
                    </button>

                  )}
                <div className='space'>
                </div>
                </div>
              </div>
              <div>
                <button
                  className="button is-success"
                  onClick={this.handleSubmit}
                >

                  <span>Add</span>
                </button>
                <div className='space'>
                </div>
              </div>
            </div>
          : null}
      </div>
    );
  }
}
const mapState = state => ({
  user: state.user,
  categories: state.categories,
  colors: state.colors
});

const mapDispatch = dispatch => {
  return {
    loadCategories(userId) {
      dispatch(fetchCategories(userId));
      dispatch(fetchColors());
    },
    addNewCategory(category, userId) {
      dispatch(addNewCategory(category, userId));
    },

  };
};
export default connect(mapState, mapDispatch)(CategoryForm);
