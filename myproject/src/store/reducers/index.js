import { combineReducers } from 'redux'
import { myReducer as quotes } from './reducer'

export const rootReducer = combineReducers({
    quotes
})