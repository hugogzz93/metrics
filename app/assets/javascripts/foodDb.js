class FoodDb {
  constructor() {
  // this.metricsAp
    this.api = new FoodApi();
    this.dataSources = {
      '0': new UsdaBridge()
    }
    this.packages = {}
  }


  async nutrientsFor(foodIds) {
    this.prepareApiRequest(foodIds)
    let results = await this.fetch();

    return Promise.all(results);
  }
  
  async prepareApiRequest(foodIds) {
  this.packages['0'] = []
    for(let id of foodIds) {
      this.loadIdInCorrectPackage(id);
    }
  }

  async fetch() {
    this.api.implement(this.dataSources['0']);
    this.lastResult = await  this.api.fetch(this.packages['0']);
    return lastResult
  }

  loadIdInCorrectPackage(id) {
    //TODO
    this.packages['0'].push(id);
  }
}
