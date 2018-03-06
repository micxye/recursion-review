// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  //compare className to className.children
  var searchNode = function(node) {
    if (node.classList.contains(className)) {
      result.push(className);     
    //push true result to result array
    }  
    //iterate through all children until complete
    for (var i = 0; i < node.children.length; i++) {
      searchNode(node.children[i]);
    }
  };

  searchNode(document.body);
  //return result
  return result;
};
