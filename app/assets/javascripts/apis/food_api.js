class FoodApi extends Api {

  async fetch(foodList) {
    let request = this.bridge.buildRequest(foodList, this.apiKey);
    let results =  await this.get(request).then(this.bridge.normalize);
    return results;
  }
}
