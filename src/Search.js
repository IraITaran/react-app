import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [image, setImage] = useState("");
  let [loaded, setLoaded] = useState(false);

  function changeCity(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }

  function showForecast(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setImage(response.data.weather[0].icon);
    setLoaded(true);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${image}@2x.png`}
              alt={description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
