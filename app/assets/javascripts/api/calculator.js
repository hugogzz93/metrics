const Calculator = {
	_isNormalizable: function (unit) {
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
	_normalizeToGrams: function (value, units) {
		var v = Number.parseFloat(value);
		switch (units) {
			case 'g':
				return v;
			case 'mg':
				return v/1000;
			case 'µg':
				return v/1000000;
			case 'kcal':
        return v*1000/8.33;
			case 'IU':
				return v;
			default:
				throw {Error: 'Calculator.normalize::33 - Unknown Measure', e: units};
				break;
		}
	},

	getNutrients: function (foods) {
		var total = {};
		for(f of foods) {
			for(nutrient of f.nutrients) {
        total[nutrient.nutrient_id] = total[nutrient.nutrient_id] || { name: nutrient.name,
                                                                       id: nutrient.nutrient_id,
                                                                       unit: nutrient.unit,
                                                                       value:0};

        if(!this._isNormalizable(nutrient.unit)) 
          throw `Calculator.calculate::53 - ${nutrient.name} is not normalizable`;

        let valueInGrams = this._normalizeToGrams(nutrient.value, nutrient.unit);
				total[nutrient.nutrient_id].value += valueInGrams;
			}
		}
		return total;
	}
}

// unit: nutrient.unit,
