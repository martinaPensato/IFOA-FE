import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector';
import WeatherInfo from './components/WeatherInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <Container className="App text-center" style={{ marginTop: '30%' }}>
    <h1 className="white-text mx-auto">DropDrama</h1>
    <CitySelector onSelectCity={setSelectedCity} />
    {selectedCity && <WeatherInfo city={selectedCity} />}
  </Container>
  );
}

export default App;

