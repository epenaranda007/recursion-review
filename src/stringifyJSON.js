// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Array
  if(Array.isArray(obj)){
    var tempArray = [];
    for(var i = 0; i < obj.length; i++){
      // try _.map
      tempArray.push(stringifyJSON(obj[i]));
    }
    return '[' + tempArray.join(',') + ']';
  }
  // Object
  if(obj && typeof obj === 'object'){
    var tempArray = [];
    for(var key in obj){
      // Functions and undefined cases
      if(typeof obj[key] === 'function' || typeof obj[key] === 'undefined'){
        continue;
      }
      tempArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key])); 
    }
    return '{' + tempArray.join(',') + '}'; 
  }
  // String
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  // Default
  return ''+obj;

};
