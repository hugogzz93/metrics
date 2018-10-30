class FoodDb {
  constructor() {
    this.api = new FoodApi();
    this.UsdaBridge = new UsdaBridge();
    this.packages = {}
  }


  async nutrientsFor(foodIds) {
    this._prepareApiRequest(foodIds)
    let results = await this._fetch();

    return Promise.all(results);
  }
  
  async _prepareApiRequest(foodIds) {
  this.packages['0'] = []
    for(let id of foodIds) {
      this._loadIdInCorrectPackage(id);
    }
  }

  async _fetch() {
    this.api.implement(this.UsdaBridge);
    this.lastResult = await this.api.fetch(this.packages['0']);
    debugger
  }

  _loadIdInCorrectPackage(id) {
    //TODO: logic to decide on which api each food should go
    this.packages['0'].push(id);
  }
}
