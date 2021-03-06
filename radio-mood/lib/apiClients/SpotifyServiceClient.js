import { ApiClient } from './ApiClient';

class SpotifyServiceClient extends ApiClient {
  static SPOTIFY_SERVICE_API_URL = 'https://kubadockertest.herokuapp.com';

  constructor() {
    super();
    this.baseUrl = SpotifyServiceClient.SPOTIFY_SERVICE_API_URL;
    this.defaultConfig = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  }
}

export default new SpotifyServiceClient();
