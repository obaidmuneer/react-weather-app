import { useState, useEffect } from 'react';
import axios from 'axios';

import Weather from './components/weather';
import './App.css';

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({})
  // const [geo, setGeo] = useState('')
  // const [data, setData] = useState('')
  useEffect(() => {
    if (window.navigator.geolocation) {
      const successfulLookup = position => {
        let { latitude, longitude } = position.coords;
        fethcedData(latitude, longitude)
      }

      window.navigator.geolocation
        .getCurrentPosition(successfulLookup, console.log);
    }
  }, [])

  let getData = (e) => {
    e.preventDefault()
    fethcedData()
  }

  let fethcedData = (lat, lon) => {
    let data;
    let apiKey = '55ff5b9f1aa556e25d9767c01329b185'
    if (lat && lon) {
      data = `lat=${lat}&lon=${lon}`
    } else {
      let city = document.querySelector('#city').value
      data = `q=${city}`
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?${data}&appid=${apiKey}&units=metric`)
      .then((res) => {
        console.log(res.data.weather);
        setWeatherData({
          name: res.data.name,
          icon: res.data.weather[0].icon,
          date: Date.now(),
          temp: Math.round(res.data.main.temp)
        })
      })
  }

  return (
    <div >
      <div >
        <div className="container">

          <div className="demo-flex-spacer"></div>

          <form onSubmit={getData}>
            <div className="webflow-style-input">
              <input type="text" placeholder="Enter your city name!" onChange={e => setCity(e.target.value)} value={city} />
              <button type="submit"><i className="icon ion-android-arrow-forward"></i>{'>'}</button>

            </div>
          </form>
          {
            weatherData?.name && <Weather
            city={weatherData.name}
            date={weatherData.date}
            temp={weatherData.temp}
            icon={weatherData.icon}
          />
          }
          

          <div className="demo-flex-spacer"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
