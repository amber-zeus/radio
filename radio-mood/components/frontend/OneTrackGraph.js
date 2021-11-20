import React from "react";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart} from "recharts";

const data = [
  {
    subject: "energy",
    A: rand(),
    fullMark: 100
  },
  {
    subject: "speechiness",
    A: rand(),
    fullMark: 100
  },
  {
    subject: "acousticness",
    A: rand(),
    fullMark: 100
  },
  {
    subject: "instrumentalness",
    A: rand(),
    fullMark: 100
  },
  {
    subject: "liveness",
    A: rand(),
    fullMark: 100
  },
];

function rand() {
  return (Math.floor(Math.random() * 100))
}

export const OneTrackGraph = () => {
  return (
    <div className="m-auto">

      <RadarChart
        cx={300}
        cy={250}
        outerRadius={200}
        width={600}
        height={420}
        data={data}
      >
        <PolarGrid/>
        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis/>
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}
