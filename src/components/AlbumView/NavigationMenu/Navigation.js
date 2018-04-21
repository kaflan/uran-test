import React from 'react';
import { Menu, Icon } from 'antd';
import "./navigation.css"
// import {Link} from "react-router-dom";

class Navigation extends React.Component {
    state = {
        current: 'app',
    };
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="app">
                    <Icon type="picture" className="large" />
                </Menu.Item>
                <Menu.Item key="chat"className="large" disabled>
                    <Icon type="appstore" />
                </Menu.Item>
                <Menu.Item key="mail"className="large" disabled>
                    <Icon type="wechat" />
                </Menu.Item>
            </Menu>
        );
    }
}
export  default  Navigation;