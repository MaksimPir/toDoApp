import { alertReducer } from './alertReducer';
import { todoReducer } from './todoReducer';
import { combineReducers } from "redux";

export const rootReducer=combineReducers({
    todoReducer,
    alertReducer
})