module.exports = {
  	entry : './src/app.js',
    output : {
    	filename: 'public/near-printer-bundle.js'
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
