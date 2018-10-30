class UsdaBridge extends ApiBridge {
  constructor() {
    super();
    this.url = 'https://api.nal.usda.gov/ndb/V2/reports';
    this.api_key = 'M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9';
  }

  buildRequest(foodList) {
    const usdaIds = foodList.map(i => {return {'ndbno': i}});
    return this._urlify(usdaIds, {'api_key': this.api_key});
  }

  normalizeResults(results) {
    const rawFoods = results.foods;
    const normalizedFoods = rawFoods.map(raw => ({desc: raw.food.desc,
                                        nutrients: raw.food.nutrients}));
    return normalizedFoods;
  }

}
