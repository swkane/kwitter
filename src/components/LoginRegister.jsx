import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { asyncRegisterUser, asyncLogin } from '../actions/auth';

class LoginRegister extends React.Component {
    state={ 
        username: '',
        password: '',
        displayName: '',
        register: false,
    }

    handle = field => e => this.setState({ [field]: e.target.value });

    handleRegister = () => {
        const { username, password, displayName } = this.state;
        this.props.dispatch(asyncRegisterUser({username, password, displayName}));
        this.setState({
            register: !this.state.register
        });
    }

    handleLogin = () => {
        const { username, password } = this.state;
        const {history} = this.props;
        this.props.dispatch(asyncLogin({username, password}));
        history.push("/messages");
    }

    showRegister = () => {
        this.setState({
            register: !this.state.register
        });
    }

    render(){
        const { username, password, register, displayName} = this.state;
        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='blue' textAlign='center'></Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    value={username}
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='username'
                                    onChange={this.handle('username')}
                                />
                                <Form.Input
                                    value={password}
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handle('password')}
                                />
                                { register &&
                                <React.Fragment>
                                    <Form.Input
                                        value={displayName}
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='displayName'
                                        type='displayName'
                                        onChange={this.handle('displayName')}
                                    />
                                    <Button color='blue' fluid size='large' onClick={this.handleRegister}>Register</Button>
                                </React.Fragment>
                                }
                                { !register &&
                                    <Button color='blue' fluid size='large' onClick={this.handleLogin}>Login</Button>
                                }
                            </Segment>
                        </Form>
                        { !register &&
                        <Message>New to us? <a onClick={this.showRegister}>Register</a></Message>
                        }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(connect()(LoginRegister));