import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import colorMap from '../../lib/apiClients/chartHelper/audioFeaturesColorMap';

export const AudioFeaturesBarChart = ({ audioFeatures }) => {
  const featuresInChartFormat = Object.keys(audioFeatures).map(feature => ({
    name: feature,
    value: audioFeatures[feature],
  }));

  return (
    <ResponsiveContainer>
      <BarChart
        data={[audioFeatures]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 0" />
        <YAxis />
        <Legend
          width={700}
          formatter={value => (
            <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>{value}</span>
          )}
        />
        {featuresInChartFormat.map(({ name }) => (
          <Bar dataKey={name} fill={colorMap[name]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
