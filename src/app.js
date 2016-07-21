// Note that React is necessary to use the jsx syntax here.
import React from 'react'
import ReactDOM from 'react-dom'

import MapContainer from './MapContainer'
import AppBar from './AppBar'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required for material-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<div>
			<AppBar />
			<MapContainer />
		</div>
	</MuiThemeProvider>,
	document.getElementById('react-application'))
