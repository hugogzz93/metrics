export default class Api {
  get(endpoint) {
    return window.fetch(endpoint, {
      method: 'GET',
      headers: new Headers({'Accept': 'application/json'})
    }).then(this._handleError.bind(this))
      .catch(error => { throw new Error(error)})
  }

  async _handleError(res) {
    if(!res.ok)
      return Promise.reject(res.statusText)
    if(!this._contentTypeIsValid(res))
      return Promise.reject("Oops, we didn't get a JSON!")
    return body.json();
  }

  _contentTypeIsValid(res) {
    const contentType = res.headers.get('content-type');

    if(contentType && contentType.includes('application/json') || contentType.includes('text/json'))
      return true;
    return false;
  }

  implement(bridge) {
    this.bridge = bridge;
    return this;
  }
}
