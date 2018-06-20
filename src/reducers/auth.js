import { SET_TOKEN } from '../actions/auth';

export const token = (state = '', action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.token;
    
        default:
            return state;
    }
}