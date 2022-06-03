// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  console.log('EXPECTED: ', JSON.stringify(obj));
  var result = '';

  //BASE CASES
  if (typeof(obj) === 'number') {
    result += obj;
  }

  if (typeof(obj) === 'boolean') {
    result += obj;
  }

  if (typeof(obj) === 'string') {
    result += '"' + obj + '"';
  }

  if (typeof(obj) === 'undefined') {
    return undefined;
  }

  if (typeof(obj) === 'function') {
    return undefined;
  }
  if (obj === null) {
    result += 'null';
    return result;
  }

  if (Array.isArray(obj)) {
    //    [1, 'two', null]
    result += '[';
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined) {
        return undefined;
      }
      if (i === obj.length - 1) {
        result += stringifyJSON(obj[i]);
      } else {
        result += stringifyJSON(obj[i]);
        result += ',';
      }
    }
    result += ']';
    return result;
  }

  if (typeof(obj) === 'object') {
    if (Object.keys(obj).length === 0) {
      result += '{}';
      return result;
    }
    result += '{';

    for (var key in obj) {
      var value = obj[key];
      if (stringifyJSON(value) === undefined) {
        continue;
      }
      result += '"' + key + '"';
      result += ':';
      result += stringifyJSON(value);
      result += ',';
    }
    if (result.length > 1) {
      result = result.slice(0, -1);
    }
    result += '}';
  }

  return result;
};
