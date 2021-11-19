const NEWONCE_API_URL = 'https://newonce-api.herokuapp.com';

async function fetchNewonceApi(url = '', config = {}) {
  let endpointUrl = url;

  if (config.params) {
    endpointUrl += `?${new URLSearchParams(config.params).toString()}`;
  }

  const response = await fetch(`${NEWONCE_API_URL}/${endpointUrl}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    ...config,
  });

  if (!response.ok) {
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  }

  return await response.json();
}

export default fetchNewonceApi;
