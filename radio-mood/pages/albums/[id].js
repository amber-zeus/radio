import Link from 'next/link';
import {
  AudioFeaturesBarChart,
  OneTrackGraph,
} from '../../components/frontend';

const mockedServerAudioFeatures = {
  energy: 0.842,
  acousticness: 0.00242,
  danceability: 0.585,
  instrumentalness: 0.00686,
  liveness: 0.0866,
  speechiness: 0.0556,
};

const Id = () => {
  return (
    <div className="mt-4 mx-2 pb-12">
      <div
        className="max-w-4xl m-auto p-8 border-2 border-black"
        style={{ fontFamily: 'MontserratV18Latin900' }}
      >
        <Link href="/">GO BACK</Link>

        <div>this is details page now</div>

        <div className="m-auto h-80 p-10 text-center flex align-center">
          <AudioFeaturesBarChart audioFeatures={mockedServerAudioFeatures} />
        </div>

        <div className="text-center m-auto flex align-center">
          <OneTrackGraph />
        </div>
      </div>
    </div>
  );
};
export default Id;
