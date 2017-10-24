function Repo (externalDb, internalDb) {
	this.externalDb = externalDb;
	this.fetchFoodData = async function (foodList) {
		// var externalFood = foodList.filter((e) => e.external == true);
		// var internalFood = foodList.filter((e) => e.external != true);
		data = await FoodDB.fetch(foodList.map((e) => e.usda_id));
		d = data.foods.map((e,i) => {
			e.food.grams = foodList[i].grams;
			return e.food;
		})
		return Calculator.calculate(d);
	}
}