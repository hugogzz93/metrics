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
      format: 'json',
      max: 10
    });
  }

  _urlify(params) {
    return `${this.url}?q=${params.query}&ds=${params.dataSource}&api_key=${params.apiKey}&max=${params.max}`;
  }

  normalizeResults(results) {
    const normalizedResults = results.list.item.map(item => ({
      name: item.name,
      api_id: item.ndbno
    }))

    return normalizedResults;
  }

}
