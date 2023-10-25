import React from 'react';
import { Grid } from '@mui/material';
const CardFormat = ({ props, handleCardSelected, selectedBooks }) => {
    console.log(selectedBooks.some(element => element.title === props.title) )
    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <div
                onClick={() => handleCardSelected(props)}
                hoverable>
                <img style={{
                    width: 150,
                    height: 285,
                    margin: "2rem 1rem",
                    opacity:`${selectedBooks.some(element => element.title === props.title) ? 0.3 : 1}`
                }} alt={props.cover} src={`${props.cover}`} />
            </div>
        </Grid>
    )
};
export default CardFormat;