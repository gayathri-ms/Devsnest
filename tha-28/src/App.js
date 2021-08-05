import './App.css';
import { useEffect , useState } from "react"

function App() {

  const [input , setInput] = useState("")
  const [totaldata ,setTotaldata] = useState({})

  const place = () => {
     fetch(`https://api.weatherapi.com/v1/current.json?key=6d8af3f1434344cb96a163106210508&q=${input}`)
    .then(res => res.json())
    .then(data => setTotaldata(data))

    setInput("")
  }
   
 

  console.log(totaldata)
  return (
    <div className="App">
      <input type="text" value={input} placeholder="Enter any city name" onChange={(e) => setInput(e.target.value) } />
      <button onClick={place}
      >Get Report</button>
      {
         totaldata.location ?
          <div>
            <h1>{totaldata.location.name}</h1>
            <img src={totaldata.current.condition.icon} alt="" />
            <h3>Humidity: {totaldata.current.humidity}</h3>
            <h3>Temperature: {totaldata.current.temp_c}</h3>
            <h3>Wind speed: {totaldata.current.wind_kph}</h3>
          </div>
          : <h1> City not found </h1>
      }
      
    </div>
  );
}

export default App;
