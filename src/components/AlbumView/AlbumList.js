import React from 'react';
import { List, Card } from 'antd';
import { Link } from "react-router-dom";
const AlbumList = ({albums}) => {
return <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
        dataSource={albums}
        renderItem={item => (
            <List.Item>
                <Card title={item.name}><Link to={`/albums/${item.id}`}>{item.name}</Link></Card>
            </List.Item>
        )}
    />
};

export default AlbumList;