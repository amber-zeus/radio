import { useState, useEffect } from 'react';
import fetchNewonceApi from '../../lib/apiHelpers/fetchNewonceApi';
import ReleasesList from './ReleasesList';
export const LandingPage = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewonceApi('releases/most_rated').then(releasesData => {
      setReleases(
        releasesData.map(release => ({
          artist: release.artist_name,
          imageUrl: release.image.url,
          name: release.name,
          releaseDate: release.release_date,
        })),
      );
      setLoading(false);
    });
  }, []);

  return (
    <div className="">
      <div className="py-4">
        <h1>Select an Album</h1>
        <ReleasesList releases={releases} loading={loading} />
      </div>
    </div>
  );
};
