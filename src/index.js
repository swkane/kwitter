import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Messages from './components/Messages';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={LoginRegister}/>
            <Route path="/messages" component={Messages}/>
        </Switch>
    </Provider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
