import React from 'react';
import {connect} from 'react-redux'
import {Container, Form, Button, Feed, Icon, Segment} from 'semantic-ui-react'
import { addMessage, addLike } from '../actions/messages';
import {image} from '../../src/semanticAssets';


class Messages extends React.Component {
    state = {
        message: '',
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
        console.log(messages)
        return (
            <div>
                <Container>
                    <Form>
                        <Form.TextArea rows="5" maxLength="150" value={this.state.message} onChange={this.handleMessage} />
                        <div>You have {count} characters remaining</div>
                        <Button color="blue" onClick={this.submitMessage}>Share</Button>
                    </Form>
                    { messages.map( (message, i) => (
                        <Segment>
                            <Feed key={i} size="large">
                                <Feed.Event>
                                    <Feed.Label>
                                        <img src={image} alt="image" />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Feed.User>{message.id}</Feed.User>
                                            <Feed.Date>{message.updatedAt}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text>{message.text}</Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon onClick={this.handleLikes} name="like" />
                                                {message.likes.length}
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Segment>
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