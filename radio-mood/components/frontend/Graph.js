import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

let buildData = (tracksInfo = undefined) => (whichBars) => (tracksInfo || [
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

]).map((track, idx) => ({
  name: idx + 1,
  ...whichBars[0] ? {energy: track.energy} : {},
  ...whichBars[1] ? {acousticness: track.acousticness} : {},
  ...whichBars[2] ? {danceability: track.danceability} : {},
  ...whichBars[3] ? {instrumentalness: track.instrumentalness} : {},
  ...whichBars[4] ? {liveness: track.liveness} : {},
  ...whichBars[5] ? {speechiness: track.speechiness} : {},
}));

function rand(){
  return ( Math.floor (Math.random() *100 ))
}

export const Graph = ({artist, album, albumId, data, whichBars = [0,1,0,0,0,0]}) => {
  {console.log(Math.random())}

  return (
    <div style={{fontFamily: "HelveticaNowTextBold"}} className="pt-16 m-auto">
      <BarChart
        width={800}
        height={300}
        data={buildData(data)(whichBars)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip/>
        <Legend/>
        {whichBars[0] && <Bar dataKey="energy" fill="#1300e9"/>}
        {whichBars[1] && <Bar dataKey="acousticness" fill="#ff3cc7"/>}
        {whichBars[2] && <Bar dataKey="danceability" fill="#a5a457"/>}
        {whichBars[3] && <Bar dataKey="instrumentalness" fill="#d65108"/>}
        {whichBars[4] && <Bar dataKey="liveness" fill="#07a0c3"/>}
        {whichBars[5] && <Bar dataKey="speechiness" fill="#0c1713"/>}
      </BarChart>
    </div>
  );
}
