import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/weather';

function App() {
  const [city, setCity] = useState('Karachi')
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    fethcedData()
  }, [])

  let getData = (e) => {
    e.preventDefault()
    fethcedData()
  }

  let fethcedData = () => {
    let apiKey = '55ff5b9f1aa556e25d9767c01329b185'
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => {
        setWeatherData({
          name : res.data.name,
          date: Date.now(),
          temp: Math.round(res.data.main.temp)
        })
      })
  }

  return (
    <div className="App">
      <div className="App-header">
        <form onSubmit={getData} >
          <span>Enter City Name: </span>
          <input type="text" onChange={e => setCity(e.target.value)} value={city} />
          <button type="submit">Get weather</button>
        </form>
        <Weather
          city={weatherData.name}
          date={weatherData.date}
          temp={weatherData.temp}
        />
      </div>
    </div>
  );
}

export default App;
