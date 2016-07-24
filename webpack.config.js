

module.exports = {
  	entry : {
  		app : './src/app.js',
  		newPrinter : './src/newPrinter.js',
  		simpleContent : "./src/simpleContent.js"
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
	    },
	    {
		  test: /\.css$/,
		  loader: 'style!css?modules',
		  include: /flexboxgrid/,
		}
	  ]
	},
	resolve: {
	  extensions: ['', '.js', '.json', '.css']
	}
};
