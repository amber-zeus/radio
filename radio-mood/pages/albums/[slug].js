import Link from 'next/link';
import { OneTrackGraph } from '../../components/frontend';
import { useRouter } from 'next/router';
import { Graph } from '../../components/frontend/Graph';
import Image from 'next/image';
import SpotifyServiceClient from '../../lib/apiClients/SpotifyServiceClient';
import { useEffect, useState } from 'react';
import NewonceApiClient from '../../lib/apiClients/NewonceApiClient';

const AlbumDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [albumDetails, setAlbumDetails] = useState(null);
  const [trackList, setTrackList] = useState(null);
  const [showFilters, setShowFilters] = useState(true);
  const [whichBars, setWhichBars] = useState([1, 1, 1, 1, 1, 1]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  useEffect(() => {
    const getAlbumData = () => {
      NewonceApiClient.fetch(`releases/${slug}`).then(newonceRelease => {
        SpotifyServiceClient.fetch('spotify/songs_features', {
          params: {
            artist: newonceRelease.artist_name,
            album: newonceRelease.name,
          },
        }).then(spotifyRelease => {
          setAlbumDetails({
            artistName: newonceRelease.artist_name,
            name: newonceRelease.name,
            description: newonceRelease.meta_description,
            imageUrl: newonceRelease.image.url,
            spotifyUrl: spotifyRelease.album_details.external_urls.spotify,
          });
          setTrackList(spotifyRelease.tracks_features);
          setSelectedTrack(spotifyRelease.tracks_features[0]);
        });
      });
    };
    if (slug) {
      try {
        getAlbumData();
      } catch {
        try {
          setTimeout(getAlbumData, 500);
        } catch {
          alert('Api call failed, try again in a few minutes');
          router.push('/');
        }
      }
    }
  }, [slug]);

  const toggleFilter = id => {
    const bars = [];
    if (whichBars.filter(Boolean).length === 1) {
      if (whichBars.findIndex(Boolean) === id) {
        setWhichBars([1, 1, 1, 1, 1, 1]);
        return;
      } else {
      }
    }
    bars[id] = !bars[id];
    setWhichBars(bars);
  };

  if (!albumDetails) {
    return (
      <div className="mt-4 mx-2 pb-12">
        <div className="text-3xl max-w-4xl m-auto p-8 border-2 border-black">
          {[...Array(10).keys()].map(e => (
            <div className="p-10">Loading...</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    albumDetails && (
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
            className="bg-blue-700 text-white p-4 text-center"
            style={{ fontFamily: 'MontserratV18Latin900' }}
          >
            <div className="text-5xl ">{albumDetails.artistName}</div>
            <div className="text-3xl mt-2">{albumDetails.name}</div>
            <div className="p-4">
              {albumDetails.imageUrl && (
                <Image
                  src={albumDetails.imageUrl}
                  height={300}
                  width={300}
                  layout="intrinsic"
                />
              )}
            </div>
          </div>

          {!showFilters && (
            <div
              className="mt-4 m-1 p-1.5 text-center border-2 w-32 cursor-pointer hover:border-black"
              onClick={() => setShowFilters(!showFilters)}
            >
              show filters
            </div>
          )}

          {showFilters && (
            <div className="mt-4 flex flex-wrap">
              <div
                className="cursor-pointer border-2 m-1 p-1.5 hover:border-black text-gray-500"
                onClick={() => setShowFilters(!showFilters)}
              >
                hide filters
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[0] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(0)}
              >
                energy
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[1] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(1)}
              >
                acousticness
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[2] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(2)}
              >
                danceability
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[3] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(3)}
              >
                instrumentalness
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[4] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(4)}
              >
                liveness
              </div>
              <div
                className={`cursor-pointer border-2 border-gray-300  m-1 p-1.5 hover:border-black ${
                  whichBars[5] ? 'bg-gray-300' : ''
                }`}
                onClick={() => toggleFilter(5)}
              >
                speechiness
              </div>
            </div>
          )}

          <Graph data={trackList} whichBars={whichBars} />

          <ul
            style={{ fontFamily: 'HelveticaNowDisplayBlk ' }}
            className="m-4 flex flex-wrap"
          >
            {trackList &&
              trackList.map((track, index) => (
                <li
                  title={JSON.stringify(selectedTrack, null, 2)}
                  className={`cursor-pointer border-2 m-1 p-1.5 hover:border-black border-gray-300 ${
                    selectedTrackId === index ? 'bg-gray-300' : ''
                  }`}
                  onClick={() => {
                    setSelectedTrack(track);
                    setSelectedTrackId(index);
                  }}
                >
                  {index + 1}. {track.name}
                </li>
              ))}
          </ul>

          <div className="m-auto flex justify-content mb-4">
            <OneTrackGraph track={selectedTrack} />
          </div>
        </div>
      </div>
    )
  );
};

export default AlbumDetails;
