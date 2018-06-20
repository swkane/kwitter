import { CREATE_MESSAGE , ADD_LIKE } from '../actions';

const initialState = {
        message: '',
        messages: [],
        likes: 0,
        author: "Sam"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case ADD_LIKE:
            return {
                ...state,
                likes: state.likes += 1
            }
        default:
            return state
    }
}