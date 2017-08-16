import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import categories from './categories'
import tasks from './tasks'
import events from './events'
import colors from './colors'


const reducer = combineReducers({user, categories, tasks, events, colors})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './categories'
export * from './tasks'
export * from './events'
export * from './colors'

