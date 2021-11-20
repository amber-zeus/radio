import Link from 'next/link';
import {
  AudioFeaturesBarChart,
  OneTrackGraph,
} from '../../components/frontend';
import { useRouter } from 'next/router';

const mockedServerAudioFeatures = {
  energy: 0.842,
  acousticness: 0.00242,
  danceability: 0.585,
  instrumentalness: 0.00686,
  liveness: 0.0866,
  speechiness: 0.0556,
};

const AlbumDetails = ({ params }) => {
  const router = useRouter();
  // debugger
  if (router === undefined) {
    router.push('/');
  }

  const [album, artist] = router.query?.id?.split('_') || [];

  console.log(album);
  console.log(artist);

  return (
    <div className="mt-4 mx-2 pb-12">
      <div
        className="max-w-4xl m-auto p-8 border-2 border-black"
        style={{ fontFamily: 'MontserratV18Latin900' }}
      >
        <Link href="/" className="">
          <div className="text-3xl border border-2 w-52 text-center p-2 hover:border-blue-900 cursor-pointer text-blue-700">
            go back
          </div>
        </Link>
        <br />
        {artist} - {album}
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

export default AlbumDetails;
