import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Messages from './Messages';
import TestComponent from './TestComponent';
import { asyncGetMessages } from '../actions/messages';


// I use the testcomponent to quickly test redux actions etc

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(asyncGetMessages());
  };
  
  render() {
    return (
        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route path="/messages" component={Messages} />
          <Route path="/test" component={TestComponent} />
        </Switch>
    );
  }
}

export default withRouter(connect()(App));
