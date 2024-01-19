import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

//FUNCTION TO SELECT CITY 
function CitySelector({ onSelectCity }) {
  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSelectCity = () => {
    onSelectCity(city);
  };

//CURRENT DATE SHOWING

  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

//FORM

  return (
    <Form>
      <InputGroup>
        <InputGroup.Text>{getCurrentDate()}</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="...Where?"
          value={city}
          onChange={handleCityChange}
          style={{ outline: 'none', boxShadow: 'none' }}
        />
        <Button variant="success" onClick={handleSelectCity}>
          Umbrella?
        </Button>
      </InputGroup>
    </Form>
  );
}

export default CitySelector;

