import Api from './Api';
import Calculator from '../Calculator';

export default class FoodApi extends Api {

  async getNutrientsOf(foodList) {
    const nutrientSummary = await this.fetch(foodList).then(this._makeNutrientSummary)
    return nutrientSummary;
  }

  async searchFoods(query) {
    return this._fetch(query);
  }

  async _fetch(query) {
    const request = this.bridge.buildRequest(query); //brige is changed by caller
    const normalizedResult = await this.get(request).then(this.bridge.normalizeResults);
    return normalizedResult;
  }

  _makeNutrientSummary(normalizedFoods) {
    return Calculator.getNutrients(normalizedFoods);
  }


  async _handleError(res) {
    if(!res.ok)
      return Promise.reject(res.statusText)
    if(!this._contentTypeIsValid(res))
      return Promise.reject("Oops, we didn't get a JSON!")
    const body = await res.json();
    if(body.errors)
      return Promise.reject(body.errors.error[0].message);
    return body

  }
}
