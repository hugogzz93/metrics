export default class Bridge {
  _urlify() {
    let string = this.url
    for(let arg of arguments) {
      if(this._isIterable(arg))
        for(let item of arg)
          string += this._makeParam(item);
      else
        string += this._makeParam(arg);
    }

    return this._urlSafe(string);
  }

  _makeParam(data) {
    let key = Object.keys(data)[0];
    return `&${key}=${data[key]}`;
  }

  _urlSafe(string) {
    return string.replace(/&/, '?');
  }

  _isIterable(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

  normalizeResults(foodList) {
    throw 'ApiBridge.normalizeResults must be implemented';
  }
}
