import { combineReducers} from "redux";
import authReducer from './Auth'
import currentUserReducer from  './currentUser'
import questionReducers from './Question'
import usersReducer from './Users'

export default combineReducers({
    authReducer, currentUserReducer, questionReducers ,usersReducer
})