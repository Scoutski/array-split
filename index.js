const split = (array, fn) => {
  return array.reduce((result, value) => {
    const key = fn(value);
    // discard values which resolve to a null or undefined key
    if (key == null) return result;

    if (result[key] == null) result[key] = [value];
    else result[key].push(value);

    return result;
  }, {})
}

module.exports = split;
