import { combineReducers } from "redux";
import { token } from './auth';
import { messages } from './messages';

export default combineReducers({
    token,
    messages
})
