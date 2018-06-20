import React from 'react';
import { asyncRegisterUser, asyncLogin } from '../actions/auth';
import { connect } from 'react-redux';

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

    render() {
        return (
            <React.Fragment>
                <p>This is a test component</p>
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>
            </React.Fragment>
        )
    }
}

export default connect()(TestComponent);