import React, { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import './style.css';
import booksData from './books.json';
import SliderFormat from './component/SliderFormat';
import Selecting from './component/Selecting';
import CardFormat from './component/CardFormat';
import CardSelected from './component/CardSelected';
import { Space } from 'antd';
export default function App() {
  const [gender, setGender] = useState("Todos")
  const [pages, setPages] = useState(0)
  const [selectedBooks, setSelectedBooks] = useState([])
  console.log("selected", selectedBooks)
  const handleChange = (value) => {
    return setGender(value)
  };
  const onChange = (value) => {
    return setPages(value)
  };

  const substractGender = useCallback(() => {
    const objCheck = {
      Todos: 1
    };
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
  const renderBooksBaseOnParameters = useCallback(() => {
    let bookResult = []
    for (let data of booksData.library) {
      if (gender === "Todos" && data.book.pages >= pages) {
        bookResult = [...bookResult, data.book]
      }
      if (data.book.pages >= pages && data.book.genre === gender) {
        bookResult = [...bookResult, data.book]
      }
    }
    return bookResult
  }, [pages, gender])
  //select book and place it on the side

  const handleCardSelected = (props) => {
    if (props) {
      if (selectedBooks.length < 1) {
        setSelectedBooks([...selectedBooks, {
          ...props
        }])
      } else if (!selectedBooks.some(element => element.title === props.title)) {
        setSelectedBooks([...selectedBooks, {
          ...props
        }])
      }
    }
  }

  const handleDeleteCard = (props) => {
    const newResult = selectedBooks.filter(element => element.title !== props.title)
    setSelectedBooks(newResult)
  }
  return (
    <Grid container>
      <Grid display={'flex'} item xs={12} sm={12}>
        <Grid display={'flex'} flexDirection={'column'} justifyContent={'space-around'}
          alignItems={'center'}
          border={'solid 1px'}
          borderRadius={'12p'}
          xs={6} sm={6}>
          <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} item xs={12} sm={12}>
            <Grid item xs={6}><SliderFormat onChange={onChange} substractPages={substractPages()} /></Grid>
            <Grid item xs={6}><Selecting handleChange={handleChange} options={substractGender()} /></Grid>
          </Grid>
          <Grid item xs={12} sm={12} > {renderBooksBaseOnParameters().map((item) => {
            return <Space align="center" size={[16, 8]} wrap><CardFormat selectedBooks={selectedBooks} key={item.IBSN} props={item} handleCardSelected={handleCardSelected} /></Space>
          })}
          </Grid>
        </Grid>
        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} item xs={5} sm={5}>{selectedBooks.map((book) => {
          return <Space align="center" size={[16, 8]} wrap><CardSelected props={book} handleDeleteCard={handleDeleteCard} /> </Space>
        })}
        </Grid>
      </Grid>

    </Grid>
  );
}
