import { CREATE_MESSAGE , ADD_LIKE, GET_MESSAGES } from '../actions/messages';

// const initialState = {
//         message: '',
//         messages: [],
//         likes: 0,
//         author: "Sam"
// }

export const messages = (state = [], action) => {
    switch(action.type) {
        case GET_MESSAGES:
            return action.messages
        // case CREATE_MESSAGE:
        //     return {
        //         ...state,
        //         messages: [...state.messages, action.payload]
        //     }
        // case ADD_LIKE:
        //     return {
        //         ...state,
        //         likes: state.likes += 1
        //     }
        default:
            return state
    }
}