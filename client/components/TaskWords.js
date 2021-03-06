
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

}


  render() {
    const { tasks, categories } = this.props;

    var colors = {};
    for(let i = 0; i<categories.length; i++){
        colors[categories[i].id] = categories[i].color.hex
    }

    return (
        <div>
        <div className='line-tasks'>
            {tasks.map((task, idx) => (
                    <div display="inline" key={idx}>
                            <Link to={'/updateTask'}>
                            <td key={idx}  display="inline" style={{ color: `${colors[task.categoryId]}` }}>{task.name}</td>
                            </Link>
                            </div>
            ))}
                        </div>
        </div>
    )
}



}

const mapState = (state) => ({
 categories: state.categories,
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

