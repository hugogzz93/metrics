const FoodDB = {
  api_key: 'M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9',

  isIterable(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  },

  urlify() {
    var string = ''
    _ = function (data) {
      var key = Object.keys(data)[0];
      return '&' + key + '=' + data[key];
    }
    for(arg of arguments) {
      if(this.isIterable(arg))
        for(item of arg)
          string += _(item)
      else
        string += _(arg)
    }
    return string.replace(/^&/g, '?')
  },

	fetch(_foodlist) {
		var _foodlist = _foodlist.map(i => {return {'ndbno': i}})
    return API.get(this.urlify(_foodlist, {'api_key': this.api_key}))
              .then(res => {
                let rawFoods = res.foods;
                let foods = rawFoods.map(raw => ({desc: raw.food.desc,
                                                       nutrients: raw.food.nutrients}));
                let nutrientConsumption = Calculator.getNutrients(foods);
                return nutrientConsumption
              })
	}

}

