import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "danceability",
    A: 44,
    B: 22,
    fullMark: 100
  },
  {
    subject: "energy",
    A: 98,
    B: 33,
    fullMark: 100
  },
  {
    subject: "speechiness",
    A: 86,
    B: 11,
    fullMark: 100
  },
  {
    subject: "acousticness",
    A: 99,
    B: 100,
    fullMark: 100
  },
  {
    subject: "instrumentalness",
    A: 85,
    B: 90,
    fullMark: 100
  },
  {
    subject: "liveness",
    A: 65,
    B: 95,
    fullMark: 100
  },
];

export const OneTrackGraph = () => {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
