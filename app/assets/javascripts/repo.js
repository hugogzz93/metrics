Repo = {
  fetchFoodData: async function (foodList) {
    var data = await FoodDB.fetch(foodList.map((e) => e.usda_id));
    var d = data.foods.map((e,i) => {
      e.food.grams = foodList[i].grams;
      return e.food;
    })
    return Calculator.calculate(d);
  }
}
