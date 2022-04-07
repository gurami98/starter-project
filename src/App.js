import React, { useState } from 'react';
import './App.css';
import Book from './Book';
import {Counter} from './Counter';
import books from './books';

// const array = [1,2,3]

// const newArray = [...array, 4, 5]

const App = () => {
  return (
    <div className="App">
      <Counter/>
      <div className="booklist">
        {
          books.map((book) => {
            return (
                // <Book author={book.author} title={book.title} img={book.img} ydisMaterial={book.ydisMaterial} children={book.children}/>
                <Book key={book.id} {...book}/>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
