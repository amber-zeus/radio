import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import newonceApiClient from '../../lib/apiClients/NewonceApiClient';
import ReleasesList from './ReleasesList';

export const LandingPage = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    newonceApiClient
      .fetch('releases/most_rated')
      .then(releasesData => {
        setReleases(
          releasesData.map(release => ({
            artist: release.artist_name,
            imageUrl: release.image.url,
            name: release.name,
            releaseDate: release.release_date,
            slug: release.slug,
          })),
        );
        setLoading(false);
      })
      .catch(_ => {
        alert('Api call failed try again in a few minutes');
        setTimeout(() => router.push('/'), 60000);
      });
  }, []);

  return (
    <div className="">
      <div className="py-4">
        <ReleasesList
          releases={releases}
          loading={loading}
          onReleaseClick={release =>
            router.push({
              pathname: `albums/${release.slug}`,
            })
          }
        />
      </div>
    </div>
  );
};
