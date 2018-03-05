// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var resultStr = '';
  
  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }
  if (typeof obj === 'number') {
    resultStr += obj;
  }
  if (typeof obj === 'string') {
    resultStr += '"' + obj + '"';
  }
  if (obj === null) {
    resultStr += 'null'
  }
  if (typeof obj === 'boolean') {
    if (obj === true) {
      resultStr += 'true';
    } else {
      resultStr += 'false';
    }
  }
  if (Array.isArray(obj)) {
    var newStr = '[';
    for (var i = 0; i < obj.length; i++) {
      newStr += stringifyJSON(obj[i]);
      if (i !== obj.length-1) {
        newStr += ','
      }
    }
    resultStr += newStr + ']';
    
  }
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
    var newStr = '{';
    for (var key in obj) {
      newStr += stringifyJSON(key) + ':' +stringifyJSON(obj[key]);
      if (key !== Object.keys(obj)[Object.keys(obj).length - 1]) {
        newStr += ','
      }
    };
    resultStr += newStr + '}';
  }
  // stringifyJSON(obj)
  if (resultStr.includes(undefined)) {
    resultStr = undefined
  }
return resultStr;
};
