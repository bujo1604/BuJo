import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import categories from './categories'
import tasks from './tasks'
import events from './events'
import notes from './notes'
import colors from './colors'
import month from './month'
import day from './day'
import week from './week'
import completeTasks from './completeTasks'
import insightsView from './insightsView'


const reducer = combineReducers({user, categories, tasks, events, notes, colors, month, day, week, completeTasks, insightsView})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './categories'
export * from './tasks'
export * from './events'
export * from './colors'
export * from './notes'
export * from './month'
export * from './day'
export * from './week'
export * from './completeTasks'
export * from './insightsView'




