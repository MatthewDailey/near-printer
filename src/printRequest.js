import React from 'react'
import ReactDOM from "react-dom"
import RenderReactApp from './RenderReactApp'

import TextField from 'material-ui/TextField';
import {Grid, Col, Row} from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
};

const iconStyles = {
  marginRight: 24,
};

class NewPrinterForm extends React.Component {
	render() {
		return (
			<Grid >
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<h2>We're currently on vacation.  ☀️😎🌴🌴</h2>
						<p>Unfortunately for you (but fortunately for us), we're on vacation catching some rays.</p>
						<p>If you want to get in touch immediately, drop us a line at <a href="mailto:hello@nearprinter.com">hello@nearprinter.com</a>. We promise to get back to you shortly.</p>
						<p>If you want to know when we're back and operational, put your email in below.</p>
					</Col>
				</Row>
			</Grid>
		)
	}
}

RenderReactApp(
	<NewPrinterForm />
)



