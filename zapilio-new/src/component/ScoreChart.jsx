import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ScoreChart = ({ score }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const data = [
      {
        name: 'Score',
        score: score,
      },
    ];

    setChartData(data);
  }, [score]);

  return (
    <div>
      {chartData && (
        <BarChart width={400} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
};

export default ScoreChart;
