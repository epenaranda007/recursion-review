// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
 // split all the characters by using split method of Array
 // whenever a '[' is found, create a new variable with array type
 // '[]'
  var chopJSON = json.split('');
  if (chopJSON[0] === '[' && chopJSON[chopJSON.length - 1] === ']' ) {
    var array = [];

    return array;
  }
  if ( chopJSON[0] === '{' && chopJSON[chopJSON.length - 1] === '}' ) {
    if ( chopJSON.length === 2 ) {
      return {};
    }
    var obj = {};
    // remove the curly braces
    // var remBraces = chopJSON.slice(1, chopJSON.length - 1);
    // var objElements = remBraces.join('');
    // can also try chopJSON.trim() to remove spaces first
    // var singleProperty = objElements.split(': ');
    chopJSON = chopJSON.slice(1, chopJSON.length - 1).join('').split(': ');
    for (var i = 0; i < chopJSON.length; i += 2) {
      var key = trimQoutes(chopJSON[i]);
      var value = trimQoutes(chopJSON[i + 1]);
      obj[key] = value;
    }
    console.log(obj);
    //chopJSON = chopJSON.split('"');
    return obj;
  }




/*  if (typeof (+json) === 'number') {
    return +json;
  }
  
  if (json[0] === '"' && json[json.length - 1] === '"') {
    return json.slice(1, json.length - 1);
  }
*/

};




var trimQoutes = function(string) {
  return string.split('')
          .reduce(function(memo, value) {
            return value !== '"' ? memo + value : memo;
          }, '');
};



