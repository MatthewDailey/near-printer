import React from 'react';
import AppBar from 'material-ui/AppBar';

import {white} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import PrintIcon from 'material-ui/svg-icons/action/print'

const logoutUrl = document.getElementById("injectedData").getAttribute("logoutUrl");
const loginUrl = document.getElementById("injectedData").getAttribute("loginUrl");

const buttonStyle = {

		color : white
}

class LoginButton extends React.Component {
	render() {
		return <FlatButton label="Log In" href={loginUrl} style={buttonStyle}/>;
	}
}

class LogoutButton extends React.Component {
	render() {
		return <FlatButton label="Log Out" href={logoutUrl} style={buttonStyle}/>;
	}
}

const getLogInOutButton = () => {
	if (logoutUrl) {
		return <LogoutButton />
	} else if (loginUrl) {
		return <LoginButton />
	}
}

class AppBarExample extends React.Component {
	render() {
		return (
			<AppBar title="Near Printer // San Francisco"
					iconElementLeft = {<IconButton href={"/"}><PrintIcon /></IconButton>}
					iconElementRight = {getLogInOutButton()}>
					</AppBar>
	    )
	}
}


module.exports = AppBarExample;
