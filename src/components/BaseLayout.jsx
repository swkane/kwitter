import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class BaseLayout extends React.Component {
state = {}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state;
    return (
      <div>
        <Menu>
            <Link to="/">
                <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                >
                    Login
                </Menu.Item>
            </Link>
            <Link to="/messages">
                <Menu.Item
                    name='messages'
                    active={activeItem === 'reviews'}
                    onClick={this.handleItemClick}
                >
                    Messages
                </Menu.Item>
            </Link>
        </Menu>
        {this.props.children}
      </div>
    );
  }
}
export default BaseLayout;