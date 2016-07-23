import React from 'react';
import AppBar from 'material-ui/AppBar';

import {white} from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import PrintIcon from 'material-ui/svg-icons/action/print'


class AppBarExample extends React.Component {
	render() {
		return (
			<AppBar title="NearPrinter"
					iconElementLeft={<IconButton><PrintIcon /></IconButton>}
					iconClassNameRight="muidocs-icon-navigation-expand-more"></AppBar>
	    )
	}
}


module.exports = AppBarExample;
