import React from 'react';
import { Card } from 'antd';
import { Grid } from '@mui/material';
const CardSelected = ({ props, handleDeleteCard }) => {
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <div
                onClick={() => handleDeleteCard(props)}
                hoverable>
                <img style={{
                    width: 150,
                    height: 285,
                    margin: "2rem 1rem",
                }} alt={props.cover} src={`${props.cover}`} />
            </div>
        </Grid>
    )
};

export default CardSelected