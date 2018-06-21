import React from 'react';
import { asyncRegisterUser, asyncLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { asyncGetMessages, asyncPostMessage } from '../actions/messages';

class TestComponent extends React.Component {
    state = {
        testUser: {
            username: 'sam',
            password: 'sam',
            displayName: 'sam'
        },
        text: 'This is a placeholder message'
    }

    handleRegister = () => {
        const { testUser } = this.state;
        this.props.dispatch(asyncRegisterUser(testUser));
    }

    handleLogin = () => {
        const { testUser } = this.state;
        this.props.dispatch(asyncLogin(testUser));
    }

    handleGetMessages = () => {
        this.props.dispatch(asyncGetMessages());
    }

    handlePostMessage = () => {
        const { text } = this.state;
        this.props.dispatch(asyncPostMessage(text));
    }

    render() {
        return (
            <React.Fragment>
                <p>This is a test component</p>
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleGetMessages}>Get Messages</button>
                <button onClick={this.handlePostMessage}>Post Message</button>
            </React.Fragment>
        )
    }
}

export default connect()(TestComponent);