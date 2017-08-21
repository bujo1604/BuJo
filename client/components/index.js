/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as AddNote} from './AddNote';
export {default as AddEvent} from './AddEvent'
export {Login, Signup} from './AuthForm'
export {default as Events} from './Events'
export {default as Insights} from './Insights'
export {default as InsightsByMonth} from './InsightsByMonth'
export {default as InsightsByWeek} from './InsightsByWeek'
export {default as Main} from './Main'
export {default as Notes} from './Notes'
export {default as Pie} from './Pie'
export {default as Scatter} from './Scatter'
export {default as SingleDay} from './Singleday'
export {default as Tasks} from './Tasks'
export {default as TaskForm} from './TaskForm';
export {default as UserHome} from './UserHome'
export {default as CategoryForm} from './CategoryForm';
export {default as MonthByDay} from './MonthByDay';
export {default as MonthDumbComp} from './MonthDumbComp';
export {default as TaskBullets} from './TaskBullets';
export {default as FutureTasks} from './FutureTasks';
export {default as Settings} from './Settings';
