// Note that React is necessary to use the jsx syntax here.
import React from 'react'
import RenderReactApp from './RenderReactApp'

import MapContainer from './MapContainer'

import RaisedButton from 'material-ui/RaisedButton';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class EasyPrintButton extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {isEasyPrintDialogOpen: false};
    	this.handleEasyButtonClicked = this.handleEasyButtonClicked.bind(this);
    	this.handleClose = this.handleClose.bind(this);
  	}

  	handleEasyButtonClicked() {
  		window.location = '#easyPrint';
    	this.setState({isEasyPrintDialogOpen: true});
  	};

  	handleClose() {
  		window.location = '#';
    	this.setState({isEasyPrintDialogOpen: false});
  	};

  	handleWantsEasyPrint() {
  		window.location = "/easyPrint"
  	}

  	render() {
	    const actions = [
	      <FlatButton
	        label="No Thanks."
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Sounds good!"
	        primary={true}
	        onTouchTap={this.handleWantsEasyPrint}
	      />,
	    ];

	    return (
	      <div>
	        <RaisedButton label="The Easy Print Button" onTouchTap={this.handleEasyButtonClicked} style={fixedElementsStyle} />
	        <Dialog
	          title="The Easy Way To Print"
	          actions={actions}
	          modal={true}
	          open={this.state.isEasyPrintDialogOpen}>
	          <p>For <b>$10</b> we will print and deliver up to <b>100 color pages</b> with in <b>1 hour</b> to anywhere in San Francisco.</p>
	        </Dialog>
	      </div>
	    );
  	}
}


const containerStyle = {
	position: "relative",
	width: '100vw',
	height: '100vh'
}

const fixedElementsStyle = {
	position: "absolute",
	right: 100,
	left: 100,
	bottom: 100,
	height: 100
}

const handleClickedEasyButton = () => {
	console.log("Clicked easy print button.");
}

RenderReactApp(
	<div style={containerStyle}>
		<MapContainer />
		<EasyPrintButton />
	</div>)
