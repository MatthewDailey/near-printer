

module.exports = {
  	entry : {
  		app : './src/app.js',
  		newPrinter : './src/newPrinter.js'
  	},
    output : {
    	path: "public",
    	filename: '[name].bundle.js'
    },
    module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015', 'react']
	      }
	    }
	  ]
	},
	resolve: {
	  extensions: ['', '.js', '.json']
	}
};
