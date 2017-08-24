/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as AddNote} from './AddNote';
export {default as AddEvent} from './AddEvent'
export {default as AddTask} from './AddTask';
export {default as AddFutureTask} from './AddFutureTask'
export {default as AddCategory} from './AddCategory';
export {Login, Signup} from './AuthForm'
export {default as BujoAnimate} from './BujoAnimate'
export {default as BujoSVG} from './BujoSVG'
export {default as Events} from './Events'
export {default as Main} from './Main'
export {default as Notes} from './Notes'
export {default as Reflections} from './Reflections'
export {default as SingleDay} from './Singleday'
export {default as Tasks} from './Tasks'
export {default as UserHome} from './UserHome'
export {default as MonthByDay} from './MonthByDay';
export {default as MonthDumbComp} from './MonthDumbComp';
export {default as MonthViewTasks} from './MonthViewTasks';
export {default as FutureTasks} from './FutureTasks';
export {default as Categories} from './Categories';
export {default as Sidebar} from './Sidebar';
export {default as HabitTracker} from './HabitTracker';
export {default as MonthViewEvents} from './MonthViewEvents';
export {default as Help} from './Help';
export {default as HabitTrackerMonth} from './HabitTrackerMonth';
export {default as UpdateTask} from './UpdateTask'

//insights
export {default as Insights} from './insights/Insights'
export {default as InsightsByMonth} from './insights/InsightsByMonth'
export {default as InsightsByWeek} from './insights/InsightsByWeek'
export {default as Scatter} from './insights/Scatter'
export {default as Pie} from './insights/Pie'
