import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Messages from './Messages';
import TestComponent from './TestComponent';


// I use the testcomponent to quickly test redux actions etc

class App extends React.Component {
  
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

export default App;
