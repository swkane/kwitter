// SYNC

export const setToken = token => ({
    type: 'SET_TOKEN',
    token
});




// ASYNC

export const asyncRegisterUser = ({ username, password, displayName }) => dispatch => {
    fetch( 'https://kwitter-api.herokuapp.com/auth/register', {
        method: "POST",
        headers: new Headers( {
          "Content-Type": "application/json",
        } ),
        body: JSON.stringify( { username, password, displayName } ),
      } )
    .then( ( response ) => {
        if ( response.ok ) {
          return response.json();
        }    
      } )
    .then( response => console.log(response))
    .catch( ( error ) => {
        console.error(error);
      } );
    
};

export const asyncLogin = ({ username, password }) => dispatch => {
    fetch( 'https://kwitter-api.herokuapp.com/auth/login', {
        method: "POST",
        headers: new Headers( {
          "Content-Type": "application/json",
        } ),
        body: JSON.stringify( { username, password } ),
      } )
    .then( ( response ) => {
        if ( response.ok ) {
          return response.json();
        }    
      } )
    .then( ({ token }) => {
        dispatch(setToken(token));
    })
    .catch( ( error ) => {
        console.error(error);
      } );
    
};