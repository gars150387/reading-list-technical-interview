import React from 'react';
import { Card } from 'antd';
const CardFormat = ({ props }) => (
    <Card
        hoverable
        
        cover={<img alt={props.cover} src={`${props.cover}`} />}
    >
    </Card>
);
export default CardFormat;