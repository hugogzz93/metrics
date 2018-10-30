class FoodApi extends Api {

  async fetch(foodList) {
    const request = this.bridge.buildRequest(foodList);
    const normalizedFoods =  await this.get(request).then(this.bridge.normalizeResults);
    const nutrientSummary = Calculator.getNutrients(normalizedFoods);
    return nutrientSummary;
  }
}
