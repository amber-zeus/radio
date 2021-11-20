export const FetchSpotifyApi = () => {
  return fetch("https://kubadockertest.herokuapp.com/spotify/songs_features?album=jarmark&artist=taco", {
    "method": "GET",
    "headers": {
      "accept": "application/json"
    }
  })
}
