// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var nodes = node || document.body;
  var result = [];

  //base case
  if(Array.from(nodes.classList).indexOf(className) >= 0){
    result.push(nodes);
  }

  //recursive
  if(nodes.childNodes.length > 0 ){
    for(var i = 0; i < nodes.childNodes.length; i++){
      if(nodes.childNodes[i].nodeType === 1){
        result = result.concat(getElementsByClassName(className, nodes.childNodes[i]));
      }
    }
  }

  return result;

};
