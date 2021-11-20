import Link from 'next/link';
import {OneTrackGraph,} from '../../components/frontend';
import {useRouter} from 'next/router';
import {Graph} from "../../components/frontend/Graph";

const mockedServerAudioFeatures = {
  energy: 0.842,
  acousticness: 0.00242,
  danceability: 0.585,
  instrumentalness: 0.00686,
  liveness: 0.0866,
  speechiness: 0.0556,
};

const AlbumDetails = ({ children, href }) => {
  const router = useRouter();
  // debugger
  if (router === undefined) {
    router.push('/');
  }

  console.log()

  const tracksList = ["Luxembourg",
    "Grand Prix",
    "Europa",
    "Pireneje",
    "Nie Ufam Sobie Sam",
    "Big Pharma",
    "Sztylet",
    "Ortalion",
    "WWA NIE Berlin",
    "Pieniądz I Terror",
    "Na Paryskie Get`to Pada Deszcz",
    "Michael Essien Birthday Party"]

  const [album, artist] = router.query?.id?.split('_') || [];

  console.log(album);
  console.log(artist);

  let iterator = 0;

  return (
    <div className="mt-4 mx-2 pb-12">
      <div
        className="max-w-4xl m-auto p-8 border-2 border-black"
        style={{fontFamily: 'MontserratV18Latin900'}}
      >
        <div className="mb-10">
          <Link href="/" className="">
            <div
              className="text-2xl border border-2 w-40 border-gray-300 text-center p-2 hover:border-black cursor-pointer text-blue-900"
              style={{fontFamily: 'HelveticaNowDisplayBlk'}}
            >
              go back
            </div>
          </Link>
        </div>


        <div
          className="bg-blue-700 text-white p-10 text-center"
          style={{fontFamily: 'MontserratV18Latin900'}}
        >
          <div className="text-5xl ">{artist}</div>
          <div className="text-3xl mt-2">{album}</div>
        </div>

        <Graph/>

        <ul style={{fontFamily: 'HelveticaNowDisplayBlk '}} className="m-4">
          {tracksList.map((track) => {
            iterator += 1;
            return <li className="p-0.5 hover:underline cursor-pointer  text-center">{iterator}. {track}</li>
          })}
        </ul>

        <div className="text-center m-auto flex align-center">
          <OneTrackGraph/>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
