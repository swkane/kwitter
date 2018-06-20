import React from 'react';
import { asyncRegisterUser, asyncLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { asyncGetMessages } from '../actions/messages';

class TestComponent extends React.Component {
    state = {
        testUser: {
            username: 'sam',
            password: 'sam',
            displayName: 'sam'
        }
    }

    handleRegister = () => {
        this.props.dispatch(asyncRegisterUser(this.state.testUser));
    }

    handleLogin = () => {
        this.props.dispatch(asyncLogin(this.state.testUser));
    }

    handleGetMessages = () => {
        this.props.dispatch(asyncGetMessages());
    }

    render() {
        return (
            <React.Fragment>
                <p>This is a test component</p>
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleGetMessages}>Get Messages</button>
            </React.Fragment>
        )
    }
}

export default connect()(TestComponent);