import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

class LoginRegister extends React.Component {
    state={
        username: '',
        password: '',
        register: false,
    }

    handle = field => e => this.setState({ [field]: e.target.value });

    handleRegister = () => {
        this.setState({
            register: !this.state.register
        });
    }

    render(){
        const {username, password, register} = this.state;
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
                        { !register &&
                        <Button color='blue' fluid size='large'>Login</Button>
                        }
                        { register &&
                            <Button color='blue' fluid size='large'>Sign Up</Button>
                        }
                    </Segment>
                    </Form>
                    { !register &&
                    <Message>New to us? <a onClick={this.handleRegister}>Sign Up</a></Message>
                    }
                </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginRegister;