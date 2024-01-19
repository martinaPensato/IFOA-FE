import React from 'react';
import { Card } from 'react-bootstrap';

//CARD TO IMPORT IN WEATHERINFO
//SAME OF EACH RESULT 

const WeatherCard = ({ title, value, unit }) => (
  <Card style={{ marginTop: '10px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
    <Card.Body style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{value !== null && `${value} ${unit}`}</Card.Text>
    </Card.Body>
  </Card>
);

export default WeatherCard;
