export class ApiClient {
  constructor(baseUrl, defaultConfig) {
    this.baseUrl = baseUrl;
    this.defaultConfig = defaultConfig;
  }

  async fetch(endpointUrl = '', config = {}) {
    let endpointUrlWithParams = endpointUrl;

    if (config.params) {
      endpointUrlWithParams += `?${new URLSearchParams(
        config.params,
      ).toString()}`;
    }

    const fullRequestUrl = `${this.baseUrl}/${endpointUrlWithParams}`;
    const response = await fetch(fullRequestUrl, {
      ...this.defaultConfig,
      ...config,
    });

    if (!response.ok) {
      return Promise.reject(
        new Error(
          `Request to ${fullRequestUrl} failed with status ${response.status}`,
        ),
      );
    }

    return await response.json();
  }
}
