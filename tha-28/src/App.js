import './App.css';
import { useEffect , useState } from "react"

function App() {

  const [input , setInput] = useState("")
  const [totaldata ,setTotaldata] = useState({})

  const place = () => {
     fetch(`https://api.weatherapi.com/v1/forecast.json?key=6d8af3f1434344cb96a163106210508&q=${input}`)
    .then(res => res.json())
    .then(data => setTotaldata(data))

    setInput("")
  }
   
 

  console.log(totaldata)
  return (
    <div className="App">
      <input className="input" type="text" value={input} placeholder="Enter any city name" onChange={(e) => setInput(e.target.value) } />
      <button className="in_button" onClick={place}
      >Get Report</button>
      {
         totaldata.location ?
         <div className="report" >
          <div className="bg_img"></div>
          <div className="forecast" >
          <div style={{display:"flex" , marginBottom:"-10px"}} >
             <div className="left" >
              <h2>{totaldata.location.name}</h2>
              <p style={{marginTop:"-5px" ,  fontSize:"15px" }}>{totaldata.location.localtime}</p>
               <img style={{marginTop:"-5px" }} src={totaldata.current.condition.icon} alt="" />
               <p style={{marginTop:"-5px" , fontSize:"20px" }}>{totaldata.current.condition.text}</p>
            </div>
            <div className="right" >
               <h1 style={{fontSize:"60px"}} >{totaldata.current.temp_c}°C </h1>
                <div>
                  <span>{totaldata.forecast.forecastday[0].day.maxtemp_c}°C/</span>
                  <span>{totaldata.forecast.forecastday[0].day.mintemp_c}°C</span>
               </div>
            </div>
          </div>
          
          <p style={{fontSize:"20px" , marginTop:"0px"}}>
            <span >Humidity: {totaldata.current.humidity}%</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span >Wind speed: {totaldata.current.wind_kph}kmph</span>
          </p>
          <hr/>
          <div style={{display:"flex"}} >
            {/*<p><img src={totaldata.forecast.forecastday[0].hour[1].condition.icon} alt="" /></p>*/}
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>
          </div>
          </div>
          : <h1> City not found </h1>
      }
      
    </div>
  );
}

export default App;
