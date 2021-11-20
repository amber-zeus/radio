import React from "react";
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip} from "recharts";

const buildData = ({speechiness, energy, acousticness, instrumentalness, liveness, ...data}) => [
  {
    subject: "energy",
    A: energy,
    fullMark: 100
  },
  {
    subject: "speechiness",
    A: speechiness,
    fullMark: 100
  },
  {
    subject: "acousticness",
    A: acousticness,
    fullMark: 100
  },
  {
    subject: "instrumentalness",
    A: instrumentalness,
    fullMark: 100
  },
  {
    subject: "liveness",
    A: liveness,
    fullMark: 100
  },
];

function rand() {
  return (Math.floor(Math.random() * 100))
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{label}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};
export const OneTrackGraph = ({track}) => {
  return (
    <div className="m-auto">
      <RadarChart
        cx={250} cy={200} outerRadius={150} width={500} height={350}
        data={buildData(track || {})}
      >
        <PolarGrid/>

        <PolarAngleAxis dataKey="subject"/>
        <PolarRadiusAxis domain={[0,1]}/>
        <Radar
          radiusAxis={{domain: [0, 1]}}
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
          tooltipType={'label-percent'}
        />
      </RadarChart>
    </div>
  );
}
