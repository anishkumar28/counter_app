import './App.css';
import { useState } from 'react';



function App() {

  let [counter,setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
 
  }

  return (
    <div className="App">
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>Increase value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </div>
  );
}

export default App;
