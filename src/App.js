import React, { useState } from 'react';
import './App.css';
const rand = "dsa"
const App = () => {
  return (
    <div className="App">
      <Counter/>
      {/* <Book author={"Author N1"} bookName={"Book 1"} ydisMaterial={"tyavi"}>
        <p>lorem ipsum paragraph</p>
      </Book>
      <Book className="book" author={"Author N2"} bookName={"Book 2"}/>
      <Book author={"Author N3"} bookName={"Book 3"}/>
      <Book author={"Author N4"} bookName={"Book 4"}/> */}
    </div>
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const handleInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <input type="text" onChange={(e) => handleInput(e)}/>
    </div>
  )
}

const Book = ({author, bookName, ydisMaterial, children}) => { // props - its an object, already destructured
  return (
    <div>
      <Image/>
      <Author author={author}/>
      <BookName bookName={bookName}/>
      {ydisMaterial && <p>ყდის მატერიალი: {ydisMaterial}</p>}
      {children}
    </div>
  )
}

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg"/>
)

const Author = ({author}) => {
  return (
    <h1 style={{fontSize: '30px', backgroundColor: 'yellow'}}>{author}</h1>
  )
}

const BookName = ({bookName}) => {
  return (
    <h2>{bookName}</h2>
  )
}


export default App;
