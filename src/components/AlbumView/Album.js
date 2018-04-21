import React from 'react';
import {moduleName as auth} from "../../ducks/auth";
import {connect} from 'react-redux';
import Navigation from "./NavigationMenu/Navigation";
import { List, Card } from 'antd';
import {moduleName as albumsModule, getAlbums} from "../../ducks/albums";

class Album extends React.Component {
    componentDidMount() {
        const {userID, accessToken, getAlbums} = this.props;
        getAlbums(userID,accessToken);
    }
    render() {
        const {name, albums} = this.props;
        console.log("___LOG___albums", albums.length);
        return <div>
            <Navigation/>
            <h1> Welcome, {name}.</h1>
            <List
                grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                dataSource={albums}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.name}>{item.name}</Card>
                    </List.Item>
                )}
            />
        </div>;
    }
}

export default connect(state=>({
    name: state[auth].name,
    userID: state[auth].userID,
    accessToken: state[auth].accessToken,
    albums: state[albumsModule].albums
}), {getAlbums})(Album);