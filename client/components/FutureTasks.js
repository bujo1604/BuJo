import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeArrOfDaysInMonthSunToSat, makeArrMonthsInYear } from '../utils/dateUtils'
import MonthDumbComp from './MonthDumbComp';
import { gotNextYear, gotPreviousYear, updatedYear , postNewFutureTask, fetchCategories, fetchFutureTasks, fetchFutureTasksRange} from '../store'
import TaskWords from './TaskWords'
import AddFutureTask from './AddFutureTask'


class FutureTasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            monthInput: "",
            categoryId: 1

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectedCategory = this.selectedCategory.bind(this);
    }

    componentDidMount() {

        this.props.loadDataFuture(this.props.user.id, this.props.year, moment(this.props.year).endOf("year").format("YYYYMMDD"));
        this.props.loadCategories(this.props.user.id);
    }

    handleChange(event){
       this.setState({value: event.target.value});
    }
    handleMonthChange(event){
        this.setState({monthInput: event.target.value})
    }
    handleSubmit(event){
         event.preventDefault();
         var month = moment(this.props.year.slice(0,4) + " " + this.state.monthInput + " 01").format("YYYYMMDD").toString();

        var obj = {FutureMonth: month, name: this.state.value, userId: this.props.user.id, status: 'incomplete', date: 'notYetAssigned', assigned: 'unassigned', categoryId: this.state.categoryId/1}

        this.props.addFutureTask(obj);
    }
    selectedCategory(event) {
        event.preventDefault();
        this.setState({ categoryId: event.target.id })

    }
    render() {

        const {user, future, month, year, previousYear, nextYear, updateYear, addFutureTask} = this.props;
        const monthsInYear = makeArrMonthsInYear(year);

        var filterF = [];
        for(let i = 0; i<12; i++){
            filterF.push([]);
        }

    for (let i = 0; i < future.length; i++){
        var taskDate = future[i].FutureMonth;
        let index = monthsInYear.indexOf(taskDate);

            if (index !== -1){
                filterF[index].push(future[i]);
            }
    }


        return (
            <div>
            <div className='space-around-buttons'>
            <div className="content-title">
            <a href="#" className="previous round" onClick={previousYear}>
            &#8249;
          </a>
            <h1>{moment(year).format("YYYY")}</h1>
            <a href="#" className="next round" onClick={nextYear}>
            &#8250;
          </a>
          </div>
          </div>
           <table className='month'>
           <tr key="1">
            <th>Month</th>
            <th>Future Tasks</th>

          </tr>
            {monthsInYear.map((monthInArr, ind)=>{

                return (
                    <tr key={Math.random()}>
                    <td>{moment(monthInArr).format("MMMM")}</td>
                    <TaskWords tasks={filterF[ind]} />

                    </tr>
                )
            })}

</table>
            <Link to={"/addfuturetask"}>
  <button className="button is-success">

              <span>Add Future Task</span>
            </button>
    </Link>
            </div>

        )
    }
}

const mapState = (state) => ({
    user: state.user,
    future: state.future,
    month: state.month,
    categories: state.categories,
    year: state.year
});

const mapDispatch = (dispatch) => {
    return {
        loadDataFuture(userId, start, end) {
            //dispatch(fetchFutureTasks(userId));
            dispatch(fetchFutureTasksRange(userId, start, end));
        },
        nextYear() {
            dispatch(gotNextYear())  // to be used in on click
        },
        previousYear() {
            dispatch(gotPreviousYear()) // to be used in on click
        },
        updateYear(year){
            dispatch(updatedYear(year))
        },
         addFutureTask(newTask){
            dispatch(postNewFutureTask(newTask));

    },
         loadCategories(userId) {
            dispatch(fetchCategories(userId));


        },
    };
}


export default connect(mapState, mapDispatch)(FutureTasks);
