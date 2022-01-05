const path = require('path');

module.exports = {
  entry: {
	'Page1' : './javascript/Page1.js',
	'Page2' : './javascript/Page2.js',
	'Page3' : './javascript/Page3.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};