/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as AddNote} from './AddNote';
export {Login, Signup} from './AuthForm'
export {default as Events} from './Events'
export {default as Insights} from './Insights'
export {default as Main} from './Main'
export {default as Month} from './Month';
export {default as MyCalendar} from './MyCalendar';
export {default as Notes} from './Notes'
export {default as Pie} from './Pie'
export {default as Scatter} from './Scatter'
export {default as SingleDay} from './Singleday'
export {default as Tasks} from './Tasks'
export {default as TaskForm} from './TaskForm';
export {default as UserHome} from './UserHome'
export {default as Week} from './Week';
