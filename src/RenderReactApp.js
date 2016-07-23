// Note that React is necessary to use the jsx syntax here.
import React from 'react'
import ReactDOM from 'react-dom'

import MapContainer from './MapContainer'
import AppBar from './AppBar'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: green500
  }
});

// Required for material-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

module.exports = (internal) => {
	ReactDOM.render(
		<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<AppBar />
				{internal}
			</div>
		</MuiThemeProvider>,
		document.getElementById('react-application'))
}
