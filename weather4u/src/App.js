import React, { useState } from "react";
const api = {
  key: "532545037cc7b5bd623fb262091e9651",
  // base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=532545037cc7b5bd623fb262091e9651"
  base: "http://api.openweathermap.org/data/2.5/"
};

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result));
    }
  }

  const dateBuilder = (d) => {
      let months = ["Janauary", "Febuary", "March", "April", "May", "June", "July", "Augyst", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..." 
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;