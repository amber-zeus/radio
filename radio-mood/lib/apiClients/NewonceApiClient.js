import { ApiClient } from './ApiClient';

class NewonceApiClient extends ApiClient {
  static NEWONCE_API_URL = 'https://newonce-api.herokuapp.com';

  constructor() {
    super();
    this.baseUrl = NewonceApiClient.NEWONCE_API_URL;
    this.defaultConfig = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
  }
}

export default new NewonceApiClient();
