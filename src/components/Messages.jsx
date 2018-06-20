import React from 'react';
import {connect} from 'react-redux'
import {Container, Form, Button, Feed, Icon} from 'semantic-ui-react'
import { addMessage, addLike } from '../actions';

class Messages extends React.Component {
    state = {
        message: '',
        messages: [],
        likes: 0,
        author: "Sam"
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    submitMessage = () => {
        this.props.dispatch(addMessage(this.state.message))
        this.setState({
            message: ''
        });
    }

    handleLikes = () => {
        this.props.dispatch(addLike(this.state.likes))
    }

    render(){
        let count = 150 - this.state.message.length;
        const {messages} = this.props;
        return (
            <div>
                <Container>
                    <Form>
                        <Form.TextArea rows="5" width="7" maxLength="150" value={this.state.message} onChange={this.handleMessage} />
                        <div>You have {count} characters remaining</div>
                        <Button color="blue" onClick={this.submitMessage}>Share</Button>
                    </Form>
                    { messages.map( (message, i) => (
                        <Feed key={i} size="large">
                            <Feed.Event>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User>{this.state.author}</Feed.User>
                                        <Feed.Date>x minutes ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra text>{message}</Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon onClick={this.handleLikes} name="like" />
                                            {this.props.likes} Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    ))}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages,
        likes: state.likes
    }
}
export default connect(mapStateToProps)(Messages);