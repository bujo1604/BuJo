
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../store';
import { Link } from 'react-router-dom';


/*
const TaskWords = (props) => {
    const { tasks } = props;
    
    return (
        <div>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>
                            <button>update</button>
                            <div key={idx} style={{ color: `${task.category.color.hex}` }} display="inline">{task.name}</div>
                </div>
            ))}
        </div>
    )
}

export default TaskWords;

*/


class TaskWords extends Component {

  constructor(props) {
    super(props);
  }

componentDidMount(){
    //this.props.loadCategories(this.props.user.id)
}


  render() {
    const { tasks } = this.props;
console.log(this.props, "this.props. in taskwords")
    for(let i = 0; i < tasks.length; i++){
        if(!!tasks.category){
            console.log("has a category")
        }
        else{
            console.log("doesnt have a category")
        }
    }
    
    return (
        <div>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>
                           
                            <span key={idx} display="inline">{task.name}</span>
                                <Link to={'/help'}>update</Link>
                            </div>
            ))}
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

export default connect(mapState, mapDispatch)(TaskWords);

