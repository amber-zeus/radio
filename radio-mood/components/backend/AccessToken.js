var SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')

const spotifyApi = new SpotifyWebApi({
  clientId: '46c7cc366a0e408084f6a97370b736c7',
  clientSecret: '317bc85312684d0c90c8b5afa6742107'
});


spotifyApi.clientCredentialsGrant().then(
  function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
    getAlbums()
    console.log(spotifyApi.getAccessToken())
  },
  function (err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  },
);

// Passing a callback - get Elvis' albums in range [20...29]
function getAlbums () {
  return (
    spotifyApi
      .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 })
      .then(
        function(data) {
          console.log('Album information', data.body);
        },
        function(err) {
          console.error(err);
        }
      )
)
}
