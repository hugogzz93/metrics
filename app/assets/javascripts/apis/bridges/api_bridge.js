class ApiBridge {
  urlify() {
    let string = this.url
    for(let arg of arguments) {
      if(this.isIterable(arg))
        for(let item of arg)
          string += this.makeParam(item);
      else
        string += this.makeParam(arg);
    }

    return this.urlSafe(string);
  }

  makeParam(data) {
    let key = Object.keys(data)[0];
    return `&${key}=${data[key]}`;
  }

  urlSafe(string) {
    return string.replace(/&/, '?');
  }

  isIterable(obj) {
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

  normalize(foodList) {
    return foodList;
  }
}
