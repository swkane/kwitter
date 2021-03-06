// Action Types

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const ADD_LIKE = "ADD_LIKE";
export const GET_MESSAGES = 'GET_MESSAGES'

// SYNC

// not sure if we actually need an action for this, because what other component needs to know about it?
export const addMessage = message => ({
    type: CREATE_MESSAGE,
    payload: message
});

export const getMessages = messages => ({
    type: GET_MESSAGES,
    messages
})


// Likes

export const addLike = messageId => ({
    type: ADD_LIKE,
    messageId
});


// ASYNC

export const asyncPostMessage = text => ( dispatch, getState ) => {
    console.log(`posting ${ text }`);
    const { token } = getState();
    token &&
        fetch( 'https://kwitter-api.herokuapp.com/messages', {
            method: "POST",
            headers: new Headers( {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
            } ),
            body: JSON.stringify( { text } ),
        } )
        .then( ( response ) => {
            if ( response.ok ) {
            return response.json();
            }    
        } )
        .then( () => {
            dispatch(asyncGetMessages());
        })
        .catch( ( error ) => {
            console.error(error);
        } ); 
};

export const asyncGetMessages = () => dispatch => {
    console.log('getting all messages');
    fetch('https://kwitter-api.herokuapp.com/messages')
    .then( ( response ) => {
        if ( response.ok ) {
          return response.json();
        }    
      } )
    .then( ({ messages }) => {
        dispatch(getMessages(messages));
    })
    .catch( ( error ) => {
        console.error(error);
      } ); 
};