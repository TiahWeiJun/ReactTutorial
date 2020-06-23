import {combineReducers} from 'redux'
import authReducer from './authReducer.js'
import projectReducer from './projectReducer.js'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
})

export default rootReducer