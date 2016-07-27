import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class FirstVisitDialog extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {isDialogOpen: false};
    	this.handleIsFirstVisit = this.handleIsFirstVisit.bind(this);
    	this.handleClose = this.handleClose.bind(this);
  	}

  	handleIsFirstVisit() {
  		localStorage.hasVisited = true;
    	this.setState({isDialogOpen: true});
  	};

  	handleClose() {
    	this.setState({isDialogOpen: false});
  	};

	componentDidMount() {
		console.log("called componentDidMount in FirstVisitDialog");
		if (!localStorage.hasVisited) {
			console.log("is first visit");
			this.handleIsFirstVisit();
		}
	}

  	render() {
	    const actions = [
	      <FlatButton
	        label="Got it."
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];

	    return (
	      <div>
	        <Dialog
	          title="Welcome to Near Printer! 🖨"
	          actions={actions}
	          modal={true}
	          open={this.state.isDialogOpen}>
	          <p>Use this map to find a place to get your printing done. Especially if you don't own a printer.</p>
	          <p>If you just need to print 20-30 color 8.5x11 flyers or a couple black & white pages then Near Printer is for you.</p>
	          <p>Check out the <b>Easy Print Button</b> for the fastest way to get your printing done. 🤓</p>
	          <p>If you have any questions or comments, drop us a line at <a href="mailto:hello@nearprinter.com">hello@nearprinter.com</a>. We'd love to hear from you!</p>
	        </Dialog>
	      </div>
	    );
  	}
}

module.exports = FirstVisitDialog;
