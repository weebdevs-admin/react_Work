import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState('')
  return (
    <div className="App">
      <h1>Kamida 6ta Harf yoki son kiriting </h1>
      <input type="text"placeholder='Text...'className={count?"green":"red"} onChange={(e)=>setCount(e.target.value.trim().length>=6)}/>
    </div>
  );
}

export default App;
