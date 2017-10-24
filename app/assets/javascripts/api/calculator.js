const Calculator = {
	calculate: function (foods) {
		total = {};
		for(f of foods) {
			for(nutrient of f.nutrients) {
				total[nutrient.name] = total[nutrient.name] || {name: nutrient.name,
																												unit: nutrient.unit,
																												id: nutrient.nutrient_id,
																												value:0};
				total[nutrient.name].value += Number.parseFloat(nutrient.value) * (f.grams / 100);
			}
		}
		return total;
	}
}