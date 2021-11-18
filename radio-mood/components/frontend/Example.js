import {Button, Input, Progress} from 'antd';

export const Example = () => {
  const {Search} = Input;
  const onSearch = value => console.log(value);
  return (
    <div className="">
      <div className="py-4">
        <h2>Search track in Newonce Database (spotify ID)</h2>
        <Search placeholder="Track name" onSearch={onSearch} enterButton/>
      </div>
      <div className="py-4">
        <h2>Show me recommendation</h2>
        <Search placeholder="Spotify ID" onSearch={onSearch} enterButton/>
      </div>
      here parsed data from tracks
      <div className="py-4">
        <h2>In next suggestion I want:</h2>


        <div className="text-center">


          <div className="py-3">
            - popularity +
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            - danceability +
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            happiness
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            acousticness
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            instrumentalness
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            liveness
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <div className="py-3">
            speechiness
            <br/>
            <Progress percent={30} steps={5}/>
          </div>

          <Button type="primary">Search! and show me next 3 tracks</Button>

        </div>
      </div>

    </div>
  )
}
