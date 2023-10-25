import React from 'react';
import {Card } from 'antd';
import { Grid } from '@mui/material';
const CardFormat = ({ props, handleCardSelected }) => {
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <Card
                onClick={()=> handleCardSelected(props)}
                hoverable
                style={{
                    width: 150,
                    height: 285,
                    margin: "2rem 1rem",
                }}
                cover={<img alt={props.cover} src={`${props.cover}`} />}
            >
            </Card>
        </Grid>
    )
};
export default CardFormat;