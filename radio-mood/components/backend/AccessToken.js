var SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: '46c7cc366a0e408084f6a97370b736c7',
  clientSecret: '317bc85312684d0c90c8b5afa6742107'
});

spotifyApi.clientCredentialsGrant().then(
  function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    spotifyApi.setAccessToken(data.body['access_token']);

    // SearchTracks("query")
  },
  function (err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  },
);

// Search tracks whose artist's name contains: query
function SearchTracks(query) {
  return (
    spotifyApi.searchTracks(query)
      .then(function (data) {
        console.log(query, data.body);
      }, function (err) {
        console.log('Something went wrong!', err);
      })

  )
}
