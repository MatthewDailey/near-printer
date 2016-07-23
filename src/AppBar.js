import React from 'react';
import AppBar from 'material-ui/AppBar';

import {white} from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import PrintIcon from 'material-ui/svg-icons/action/print'


class AppBarExample extends React.Component {
	render() {
		return (
			<AppBar title="Near Printer"
					iconElementLeft={<IconButton href={"/"}><PrintIcon /></IconButton>}>
					</AppBar>
	    )
	}
}


module.exports = AppBarExample;
