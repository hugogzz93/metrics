class UsdaBridge extends ApiBridge {
  constructor() {
    super();
    this.url = 'https://api.nal.usda.gov/ndb/V2/reports';
    this.api_key = 'M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9';
  }

  buildRequest(foodList, apiKey) {
    let usdaIds = foodList.map(i => {return {'ndbno': i}});
    return this.urlify(usdaIds, {'api_key': this.api_key});
  }

}
