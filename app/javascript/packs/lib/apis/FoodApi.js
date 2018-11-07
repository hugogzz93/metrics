import Api from './Api';
import Calculator from '../Calculator';

export default class FoodApi extends Api {

  async getNutrientsOf(foodList) {
    const nutrientSummary = await this.fetch(foodList).then(this._makeNutrientSummary)
    return nutrientSummary;
  }

  async searchFoods(query) {
    this._fetch(query);
  }

  async _fetch(foodList) {
    const request = this.bridge.buildRequest(foodList); //brige is changed by caller
    const normalizedResult = await this.get(request).then(this.bridge.normalizeResults);
    return normalizedResult;
  }

  _makeNutrientSummary(normalizedFoods) {
    return Calculator.getNutrients(normalizedFoods);
  }
}
