import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './user'
import {users, employers} from './users'
import singleUser from './single-user'
import {job, jobs} from './job'
import {companies, company} from './company'

const reducer = combineReducers({
  user,
  users,
  employers,
  singleUser,
  job,
  jobs,
  companies,
  company
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
