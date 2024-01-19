import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// CHART TO IMPORT TO SHOW FORECAST RESULTS (TODAY+5DAYS)

const WeatherChart = ({ data }) => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '300px', overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius:'15%', marginTop:'20px'}}>
        <ResponsiveContainer style={{ marginTop:'15px' }}>
          <LineChart data={data}>
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart;
