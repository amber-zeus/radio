import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const data = [
  {
    name: "1",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "2",
    energy: 0.23,
    acousticness: 0.53,
    danceability: 0.14,
    instrumentalness: 0.41,
    liveness: 0.23,
    speechiness: 0.37,

  },
  {
    name: "3",
    energy: 1,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "4",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "5",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "6",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "7",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
  {
    name: "8",
    energy: 0.23,
    acousticness: 0.33,
    danceability: 0.44,
    instrumentalness: 0.11,
    liveness: 0.2,
    speechiness: 0.3,

  },
];

export const Graph = () => {
  return (
    <div style={{fontFamily: "HelveticaNowTextBold"}} className="pt-16">
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="energy" fill="#1300e9"/>
        <Bar dataKey="acousticness" fill="#ff3cc7"/>
        <Bar dataKey="danceability" fill="#a5a457"/>
        <Bar dataKey="instrumentalness" fill="#d65108"/>
        <Bar dataKey="liveness" fill="#07a0c3"/>
        <Bar dataKey="speechiness" fill="#0c1713"/>
      </BarChart>
    </div>
  );
}
