export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const ADD_LIKE = "ADD_LIKE"

export const addMessage = message => ({
    type: CREATE_MESSAGE,
    payload: message
});

export const addLike = () => ({
    type: ADD_LIKE
});