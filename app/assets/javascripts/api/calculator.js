const Calculator = {
	normalizable: function (unit) {
		switch (unit) {
			case 'g':
				return true;
			case 'mg':
				return true;
			case 'µg':
				return true;
			case 'kcal':
				return true;
			case 'IU':
				return true;
			default:
				return false;
				break;
		}
	},
	normalize: function (value, units) {
		var v = Number.parseFloat(value);
		switch (units) {
			case 'g':
				return v;
			case 'mg':
				return v/1000;
			case 'µg':
				return v/1000000;
			case 'kcal':
				return v;
			case 'IU':
				return v;
			default:
				throw {Error: 'Unknown Measure', e: units};
				break;
		}
	},

	parseValue: function (nutrient, food) {
		return this.normalize(nutrient.value, nutrient.unit) * (food.grams / 100);
	},

	calculate: function (foods) {
		total = {};
		for(f of foods) {
			for(nutrient of f.nutrients) {
				total[nutrient.nutrient_id] = total[nutrient.name] || {name: nutrient.name,
																												id: nutrient.nutrient_id,
																												unit: nutrient.unit,
																												value:0};
        if(this.normalizable(nutrient.unit)) {
        	total[nutrient.nutrient_id].unit = 'g';
        	total[nutrient.nutrient_id].value += this.parseValue(nutrient, f);
        } else 
					total[nutrient.nutrient_id].value += Number.parseFloat(nutrient.value) * (f.grams / 100);
			}
		}
		return total;
	}
}

// unit: nutrient.unit,