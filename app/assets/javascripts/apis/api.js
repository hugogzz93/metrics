class Api {
  get(endpoint) {
    return window.fetch(endpoint, {
      method: 'GET',
      headers: new Headers({'Accept': 'application/json'})
    }).then(this._handleError)
      .then(this._handleContentType)
      .catch(error => {throw new Error(error)})
  }

  _handleError(res) {
    return res.ok ? res : Promise.reject(res.statusText);
  }

  _handleContentType(res) {
    const contentType = res.headers.get('content-type');

    if(contentType && contentType.includes('application/json'))
      return res.json();
    return Promise.reject("Oops, we didn't get a JSON!");
  }

  implement(bridge) {
    this.bridge = bridge;
    return this;
  }
}
