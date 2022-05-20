import {combineReducers, createStore, applyMiddleware} from 'redux'
import usersStore from './users'
import stateStore from './state'
import userDetailStore from './userDetail'
import wellcomeStore from './wellcomeReducer'
import thunk from 'redux-thunk'

const appReducer = combineReducers({
    stateStore,
    usersStore,
    userDetailStore,
    wellcomeStore,
});

export default createStore(appReducer, applyMiddleware(thunk))