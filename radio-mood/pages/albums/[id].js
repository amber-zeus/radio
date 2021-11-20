import Link from 'next/link';
import { OneTrackGraph } from '../../components/frontend';
import { useRouter } from 'next/router';
import { Graph } from '../../components/frontend/Graph';
import Image from 'next/image';
import SpotifyServiceClient from '../../lib/apiClients/SpotifyServiceClient';
import { useEffect, useState } from 'react';

const AlbumDetails = ({ children, href }) => {
  const router = useRouter();
  // debugger
  if (router === undefined) {
    router.push('/');
  }

  const [album, artist] = router.query?.id?.split('_') || [];
  const [albumDetails, setAlbumDetails] = useState(null);
  const [trackList, setTrackList] = useState(null);
  const album_data = JSON.parse(router.query?.album || '{}');

  useEffect(() => {
    if (album && artist) {
      SpotifyServiceClient.fetch('spotify/songs_features', {
        params: { album, artist },
      }).then(albumData => {
        setAlbumDetails(albumData.album_details);
        setTrackList(albumData.tracks_features);
      });
    }
  }, [album, artist]);

  return (
    <div className="mt-4 mx-2 pb-12">
      <div
        className="max-w-4xl m-auto p-8 border-2 border-black"
        style={{ fontFamily: 'MontserratV18Latin900' }}
      >
        <div className="mb-10">
          <Link href="/" className="">
            <div
              className="text-2xl border border-2 w-40 border-gray-300 text-center p-2 hover:border-black cursor-pointer text-blue-900"
              style={{ fontFamily: 'HelveticaNowDisplayBlk' }}
            >
              go back
            </div>
          </Link>
        </div>

        <div
          className="bg-blue-700 text-white p-10 text-center"
          style={{ fontFamily: 'MontserratV18Latin900' }}
        >
          <div className="text-5xl ">{artist}</div>
          <div className="text-3xl mt-2">{album}</div>
        </div>

        <div className="p-4">
          {album_data.imageUrl && (
            <Image
              src={album_data.imageUrl}
              height={300}
              width={300}
              layout="intrinsic"
            />
          )}
        </div>

        <Graph />

        <ul style={{ fontFamily: 'HelveticaNowDisplayBlk ' }} className="m-4 flex flex-wrap">
          {trackList &&
            trackList.map((track, index) => (
              <li className="cursor-pointer border-2 m-1 p-1.5 hover:border-black">
                {index+1}. {track.name}
              </li>
            ))}
        </ul>

        <div className="m-auto flex justify-content mb-4">
          <OneTrackGraph />
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
