import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter } from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';

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
        <BaseLayout>
            <App />
        </BaseLayout>
    </Provider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
