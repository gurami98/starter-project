import { useState } from "react";
export const Counter = () => {
    const [counter, setCounter] = useState(0);
  
    const incrementCounter = () => {
      setCounter(
          (prevState) => prevState + 1
      );
    }
  
    const handleInput = (e) => {
      console.log(e.target.value);
    }
  
    return (
      <div>
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment</button>
        <input type="text" onChange={handleInput}/>
      </div>
    )
}