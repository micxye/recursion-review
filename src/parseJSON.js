// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // how to idenitfy input
  // how to seperate input
  var newjson = json;
  if (json.slice(0,1) === '[' && json.slice(-1) === ']') {
    var newArr = [];
    return newArr;
  } 
  if (json.slice(0,1) === '{' && json.slice(-1) === '}') {
    var newObj = {};
    var objArr = json.split(', ');
    for (var i = 0; i < objArr.length; i++) {
    if (objArr[i])
    }
    return newObj;
  }
  var quoteCounter = function(string) {
    for (var i = 0; i < string.length; i++) {
    
    }
  }
};
