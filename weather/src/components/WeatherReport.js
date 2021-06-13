import React ,{useState,useEffect} from 'react';
import '../App.css';

const WeatherReport=()=> {
    const [cityName,setCityName]=useState("");
    const [cityDetail,setCityDetail]=useState(null);

    useEffect(()=>{   
     const fetchAPI=async()=>{
        const endPoint=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=18f65e46d4e85a42985cd17462961533`; 
        const responce=await fetch(endPoint);
        const res=await responce.json();
        setCityDetail(res.main);
        console.log(cityDetail);
     }
     fetchAPI();
    },[cityName]);

  return (
    <div>
        <div className="container">
          <div className="OuterText">
            <input type="text" id="searchtextbox" value={cityName} onChange={(event)=>setCityName(event.target.value)} placeholder="Enter CityName"/>
            <button type="submit">Search</button>
            <p>{cityName}</p>
          </div>        
          {!cityDetail ? (
           <p>No DATA FOUND</p>) :(
            <div>
                <div className="OuterText">
                <p>Current Temperature</p>
                <p>{cityDetail.temp}°C</p>
              </div>
              <div className="OuterBox">
                <div className="Innerbox">
                <h3>Min Temperature</h3>
                <p>{cityDetail.temp_min}°C</p>
                </div>
                <div className="Innerbox">
                <h3>Humidity</h3>
                <p>{cityDetail.humidity}°C</p>
                </div>
                <div className="Innerbox">
                <h3>Max Temperature</h3>
                <p>{cityDetail.temp_max}°C</p>
                </div>
              </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default WeatherReport;
