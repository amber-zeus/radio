import {useState} from "react";
import {Button, Input} from 'antd';
import { Progress } from 'antd';

export const Example = () => {
  const {Search} = Input;
  const onSearch = value => console.log(value);
  return (
    <div className="p-6">
      <h1 className="text-3xl">mood radio</h1>

      <div className="py-4">
        <h2>Search track (spotify ID)</h2>
        <Search placeholder="Track name" onSearch={onSearch} enterButton/>
      </div>
      <div className="py-4">
        <h2>Show me recommendation</h2>
        <Search placeholder="Spotify ID" onSearch={onSearch} enterButton/>
      </div>
      here parsed data from tracks
      <div className="py-4">
        <h2>In next suggestion I want:</h2>


        <div>popularity</div>
        <div>energy</div>
        <div>danceability</div>
        <div>happiness</div>
        <div>acousticness</div>
        <div>instrumentalness</div>
        <div>liveness</div>
        <div>speechiness</div>
        <Button type="primary">Search! and show me next 3 tracks</Button>

        <br/>
        <Progress percent={30} steps={5} />
        <br/>
        <Progress percent={46} steps={5} />


      </div>

    </div>
  )
}
