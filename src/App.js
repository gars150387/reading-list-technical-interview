import React, { useCallback } from 'react';
import { Grid } from '@mui/material';
import './style.css';
import booksData from './books.json';
import SliderFormat from './component/SliderFormat';
import Selecting from './component/Selecting';
import CardFormat from './component/CardFormat';
export default function App() {
  const substractGender = useCallback(() => {
    const objCheck = {};
    for (let data of booksData.library) {
      if (!objCheck[data.book.genre]) {
        objCheck[data.book.genre] = 1;
      }
    }
    return Object.keys(objCheck);
  }, []);
  substractGender()
  const substractPages = useCallback(() => {
    const objCheck = {};
    for (let data of booksData.library) {
      if (!objCheck[data.book.pages]) {
        objCheck[data.book.pages] = 1;
      }
    }
    return Object.keys(objCheck);
  }, []);
  substractPages();

  //render base on gender || pages but all by default


  //select book and place it on the side

  
  return (
    <Grid container>
      <Grid item={8}>
        <Grid item xs={12}>
          <Grid item xs={6}><SliderFormat /></Grid>
          <Grid item xs={6}><Selecting options={substractGender()} /></Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>{booksData.library.map((item) => {
          return <CardFormat key={item.book.IBSN} props={item.book} />
        })}
      </Grid></Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
