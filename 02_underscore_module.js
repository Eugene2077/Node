
// now let's use underscore, by convention, we use '_' for underscore 
var _ = require('underscore');
// when we supply a string to require, the 'require' function will look for the core module.
//but underscore is not a core module, so it will look for the file or folder in this project
//but, there is no file or folder named 'underscore' in this project, so it will look for the node_modules folder
// underscore is a 3rd party node module (ref: https://underscorejs.org/ )

// now let's use underscore
var result = _.contains([1,2,3], 2);
console.log(result); // true