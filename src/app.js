// Note that React is necessary to use the jsx syntax here.
import React from 'react'
import RenderReactApp from './RenderReactApp'

import MapContainer from './MapContainer'

import RaisedButton from 'material-ui/RaisedButton';


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
class EasyPrintButton extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {isEasyPrintDialogOpen: false};
    	this.handleEasyButtonClicked = this.handleEasyButtonClicked.bind(this);
    	this.handleClose = this.handleClose.bind(this);
  	}

  	handleEasyButtonClicked() {
    	this.setState({isEasyPrintDialogOpen: true});
  	};

  	handleClose() {

    	this.setState({isEasyPrintDialogOpen: false});
  	};

  	render() {
	    const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];

	    return (
	      <div>
	        <RaisedButton label="The Easy Print Button" onTouchTap={this.handleEasyButtonClicked} style={fixedElementsStyle} />
	        <Dialog
	          title="Dialog With Custom Width"
	          actions={actions}
	          modal={true}
	          contentStyle={customContentStyle}
	          open={this.state.isEasyPrintDialogOpen}
	        >
	          This dialog spans the entire width of the screen.
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
