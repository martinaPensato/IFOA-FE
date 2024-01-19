import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import WeatherCard from './WeatherCard';
import WeatherChart from './WeatherChart';

function WeatherInfo({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  // FILTERING API ARRAY TO GET ONE RESULT IN CHART FOR EACH DAY (TODAY + 5 DAYS)

  const filterDailyData = (dataList) => {
    const filteredData = [];
    const dateSet = new Set();

    for (const item of dataList) {
      const currentDate = new Date(item.dt_txt).getDate();

      if (!dateSet.has(currentDate)) {
        filteredData.push(item);
        dateSet.add(currentDate);
      }
    }

    return filteredData;
  };

  // FETCH API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '01e48cc5f9ed4b4aa24b162806bf7256';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

  // ERROR TEXT

        if (!response.ok) {
          throw new Error('Oh no! It seems Mother Nature is playing hide-and-seek with our weather info. We are on it, promise!');
        }

        const data = await response.json();
        console.log(data);

  //FILTERED DATA TO GET ONLY ONE RESULT PER DAY

        const filteredData = filterDailyData(data.list);

        setWeatherData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  // 4 CARDS WITH RESULTS

  return (
    <div>
      {weatherData ? (
        <>
          <Row>
            <Col>
              <WeatherCard title="Temperature" value={weatherData[0].main.temp} unit="°C" />
            </Col>
            <Col>
              <WeatherCard title="Weather Conditions" value={weatherData[0].weather[0].description} unit="" />
            </Col>
          </Row>
          <Row>
            <Col>
              <WeatherCard title="Humidity" value={weatherData[0].main.humidity} unit="%" />
            </Col>
            <Col>
              <WeatherCard title="Wind Speed" value={weatherData[0].wind.speed} unit="m/s" />
            </Col>
          </Row>
          <Row>
            <Col>
              <WeatherChart data={weatherData} />
            </Col>
          </Row>
        </>
      ) : (

  // LOADING TEXT
  
        <p>Loading... <i>weather</i> you like it or not!</p>
      )}
    </div>
  );
}

export default WeatherInfo;
