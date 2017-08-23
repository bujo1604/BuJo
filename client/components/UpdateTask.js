
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../store';



class UpdateTask extends Component {

  constructor(props) {
    super(props);
  }

componentDidMount(){
    //this.props.loadCategories(this.props.user.id)
}


  render() {

    console.log(this.props, "this.props in Update Task")
    return (
        <div>
         <h1>HELLO!</h1>
        </div>
    )
}

    

}

const mapState = (state) => ({
 //categories: state.categories,
 user: state.user,
});

const mapDispatch = (dispatch) => {
  return {
      /*
        loadCategories(userId) {
            dispatch(fetchCategories(userId));


        }, */
  
  };
}

export default connect(mapState, mapDispatch)(UpdateTask);