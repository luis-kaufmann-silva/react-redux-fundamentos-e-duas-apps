import { combineReducers } from 'redux';
import todoReducer from 'root/todo/reducer';
console.log(todoReducer)
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer;