import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const data = [
  {
    name: "1",
    energy:rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
  {
    name: "2",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "3",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "4",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "5",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "6",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "7",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "8",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "9",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "10",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "11",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },
   {
    name: "12",
    energy: rand(),
    acousticness: rand(),
    danceability: rand(),
    instrumentalness: rand(),
    liveness: rand(),
    speechiness: rand(),

  },

];

function rand(){
  return ( Math.floor (Math.random() *100 ))
}

export const Graph = () => {
  {console.log(Math.random())}

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
