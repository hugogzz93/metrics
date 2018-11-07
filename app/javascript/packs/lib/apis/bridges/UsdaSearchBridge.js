import Bridge from './Bridge';

export default class UsdaSearchBridge extends Bridge {
  constructor() {
    super();
    this.url = ' https://api.nal.usda.gov/ndb/search/';
    this.api_key = 'M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9';
  }

  buildRequest(query) {
    return this._urlify({
      apiKey: this.api_key,
      query: query,
      dataSource: 'Standard Reference',
    });
  }

  _urlify(params) {
    return `${this.url}?q=${params.query}&ds=${params.dataSource}&api_key=${params.apiKey}`;
  }

  _normalizeResults(results) {
    debugger
  }

}
