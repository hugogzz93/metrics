const API = {
  url: 'https://api.nal.usda.gov/ndb/V2/reports',

  _handleError(_res) {
    return _res.ok ? _res : Promise.reject(_res.statusText);
  },

  _handleContentType(_response) {
    const contentType = _response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
        return _response.json();
    }

    return Promise.reject('Oops, we haven\'t got JSON!');
  },

  get(_endpoint) {
    return window.fetch(this.url + _endpoint, {
      method: 'GET',
      headers: new Headers({'Accept': 'application/json'})
    }).then(this._handleError)
      .then(this._handleContentType)
      .catch(error => {throw new Error(error)})
  },
  
  post(_endpoint, _body) {
    return window.fetch(this.url + _endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: _body
    }).then(this._handleError)
      .then(this._handleContentType)
      .catch( error => {throw new Error(error)})
  }
}

