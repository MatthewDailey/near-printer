import React from 'react'
import ReactDOM from "react-dom"
import RenderReactApp from './RenderReactApp'

import TextField from 'material-ui/TextField';
import {Grid, Col, Row} from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
};


class NewPrinterForm extends React.Component {
	render() {
		return (
			<Grid >
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<Row>
							<TextField
								ref="locationInput"
							    hintText="Eg. UPS"
							    floatingLabelText="Location Title"
							    fullWidth="true"/>
						</Row>
						<Row>
							<TextField
								ref="costInput"
							    hintText="$1 per minute and 40c per page."
							    floatingLabelText="Cost"
							    fullWidth="true"
							    />
						</Row>
						<Row>
							<TextField
								ref="hoursInput"
							    hintText="9-5 Mon-Fri"
							    floatingLabelText="Hours"
							    fullWidth="true"
							    />
						</Row>
						<Row>
							<TextField
								ref="phoneInput"
							    hintText="415 999 9999"
							    floatingLabelText="Phone Number"
							    fullWidth="true"
							    />
						</Row>
						<Row>
							<Col xs={6}>
								<TextField
									ref="lat"
								    hintText="37.774929"
								    floatingLabelText="Latitude"
								    fullWidth="true"
								    />
							</Col>
							<Col xs={6}>
								<TextField
									ref="lon"
								    hintText="-122.419416"
								    floatingLabelText="Longitude"
								    fullWidth="true"
								    />
							</Col>
						</Row>
							<h2>Or use JSON</h2>
						<Row center="xs">
							<RaisedButton ref="submitSinglePrinter" label="Submit" style={buttonStyle} />
						</Row>
						<Row center="xs">
						</Row>
						<Row >
							<TextField
								ref="jsonInput"
							    hintText="[{...."
							    floatingLabelText="JSON List of Printers"
							    fullWidth="true"
							    />
						</Row>
						<Row center="xs">
							<RaisedButton ref="submitJsonPrinter" label="Submit" style={buttonStyle} />
						</Row>
					</Col>
				</Row>
			</Grid>
		)
	}

	componentDidMount() {
		this.refs.locationInput.focus();
	}
}

RenderReactApp(
	<NewPrinterForm />
)



