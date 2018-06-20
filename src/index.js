import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Messages from './components/Messages';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tweet from './reducers';

const store = createStore(
    tweet,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
