import React , { useState} from 'react'
import './App.css';


function App() {
  const [count1,setCount1] = useState(0)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(0)
  const [count4,setCount4] = useState(0)

  return (
    <div className="App">
      <p> There are 4 counter component instances that each manage their own state.</p>
      <button onClick={() =>{ setCount1(count1+1)}}>{count1}</button>
      <button onClick={() =>{ setCount2(count2+1)}}>{count2}</button>
      <button onClick={() =>{ setCount3(count3+1)}}>{count3}</button>
      <button onClick={() =>{ setCount4(count4+1)}}>{count4}</button>
    </div>
  );
}

export default App;
