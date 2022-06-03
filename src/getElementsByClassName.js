// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var recursion = function (element, className) {
    var classes = element.classList;
    var children = element.childNodes;
    if (classes !== undefined && classes.contains(className)) {
      result.push(element);
    }
    if (children.length > 0) {
      children.forEach((child) => {
        recursion(child, className);
      });
    }
    return result;
  };
  var result = recursion(document.body, className);
  return result;
};
