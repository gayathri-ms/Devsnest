import { useSelector } from "react-redux"

const Weather = () => {

	const totaldata = useSelector(state => state.totaldata);
	const theme = useSelector(state => state.toggle);

	return(
		<div>
			{
		         totaldata.location ?
		         <div className="report" >
		          <div className={ theme ? "bg_img dark_img" : "bg_img"}></div>
		          <div className={ theme ? "forecast dark_txt" : "forecast" } >
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
		            <div className="space">
		              <p style={{marginTop:"-5px" , fontSize:"18px"}} >1AM</p>
		              <img className="time_img" src={totaldata.forecast.forecastday[0].hour[1].condition.icon} alt="" />
		              <p style={{marginTop:"-5px"}} >{totaldata.forecast.forecastday[0].hour[1].temp_c}°C</p>
		            </div>
		             <div className="space">
		              <p style={{marginTop:"-5px" , fontSize:"18px"}} >6AM</p>
		              <img className="time_img" src={totaldata.forecast.forecastday[0].hour[6].condition.icon} alt="" />
		              <p style={{marginTop:"-5px"}} >{totaldata.forecast.forecastday[0].hour[6].temp_c}°C</p>
		            </div>
		             <div className="space">
		              <p style={{marginTop:"-5px" , fontSize:"18px"}} >11AM</p>
		              <img className="time_img" src={totaldata.forecast.forecastday[0].hour[11].condition.icon} alt="" />
		              <p style={{marginTop:"-5px"}} >{totaldata.forecast.forecastday[0].hour[11].temp_c}°C</p>
		            </div>
		             <div className="space">
		              <p style={{marginTop:"-5px" , fontSize:"18px"}} >4PM</p>
		              <img className="time_img" src={totaldata.forecast.forecastday[0].hour[16].condition.icon} alt="" />
		              <p style={{marginTop:"-5px"}} >{totaldata.forecast.forecastday[0].hour[16].temp_c}°C</p>
		            </div>
		             <div className="space">
		              <p style={{marginTop:"-5px" , fontSize:"18px"}} >8PM</p>
		              <img className="time_img" src={totaldata.forecast.forecastday[0].hour[20].condition.icon} alt="" />
		              <p style={{marginTop:"-5px"}} >{totaldata.forecast.forecastday[0].hour[20].temp_c}°C</p>
		            </div>
		          </div>
		          </div>
		          </div>
		          : <h1> City not found </h1>
		     }
		      
		</div>

		);
}

export default Weather;