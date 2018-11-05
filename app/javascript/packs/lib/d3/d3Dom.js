const D3Dom = {

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  getWidth(elem)  {
    let boundingBox = elem.getBoundingClientRect();
    return boundingBox.right - boundingBox.left;
  },

  getHeight(elem) {
    let boundingBox = elem.getBoundingClientRect();
    return boundingBox.bottom - boundingBox.top;
  },

  getPadding(elem) {
    const paddingHelper = (dir) => {
      const rawPadding = elem.style[dir];
      const cleanedPadding = rawPadding.substr(0, elem.style.height.length - 2);

      return parseInt(cleanedPadding);
    }

    const top = paddingHelper('paddingTop');
    const bottom = paddingHelper('paddingBottom');
    const right = paddingHelper('paddingRight');
    const left = paddingHelper('paddingLeft');

    const max = (x, y) => x > y ? x : y
    const biggestPadding = max(max(top, bottom), max(left, right));

    return isNaN(biggestPadding) ? 0 : biggestPadding;
  }
}

export default D3Dom;
