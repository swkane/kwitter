import React from 'react';
import { asyncRegisterUser } from '../actions/auth';
import { connect } from 'react-redux';

class TestComponent extends React.Component {
    state = {
        testUser: {
            username: 'sam',
            password: 'sam',
            displayName: 'sam'
        }
    }

    handleClick = () => {
        this.props.dispatch(asyncRegisterUser(this.state.testUser));
    }

    render() {
        return (
            <React.Fragment>
                <p>This is a test component</p>
                <button onClick={this.handleClick}>Register</button>
            </React.Fragment>
        )
    }
}

export default connect()(TestComponent);