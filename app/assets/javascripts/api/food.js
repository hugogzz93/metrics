const FoodDB = {
	api_key: 'M69RHmVKt4YGYvpGjOo2T2ywrbiKLPAo9hNBLyz9',

	isIterable(obj) {
	  if (obj == null) {
	    return false;
	  }
	  return typeof obj[Symbol.iterator] === 'function';
	},

	urlify() {
		string = ''
		_ = function (data) {
			key = Object.keys(data)[0];
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
		_foodlist = _foodlist.map(i => {return {'ndbno': i}})
		return API.get(this.urlify(_foodlist, {'api_key': this.api_key}))
	}

}

