import { useEffect, useState } from 'react';
import { Input } from 'antd';
import newonceApiClient from '../../lib/apiClients/NewonceApiClient';
import { throttle } from 'lodash';

export default function TrackSearch({ onTrackClick = () => {} }) {
  const [query, setQuery] = useState('');
  const [trackList, setTrackList] = useState([]);

  const onSearch = async search_query => {
    newonceApiClient
      .fetch('releases', {
        params: { search_query, page: 0, per_page: 10 },
      })
      .then(res => {
        setTrackList(
          res.items.map(release => ({
            id: release.id,
            name: release.name,
            artist: release.artist_name,
            date: release.release_date,
          })),
        );
      });
  };

  useEffect(() => {
    if (query.length) {
      const throttledOnSearch = throttle(onSearch, 1000);
      throttledOnSearch(query);
    }
  }, [query]);

  return (
    <div>
      <Input onChange={({ target }) => setQuery(target.value)} />
      <div className="flex flex-wrap">
        {trackList.map(track => (
          <div
            onClick={() => onTrackClick(track.id)}
            className="bg-gray-300 m-1"
          >
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
