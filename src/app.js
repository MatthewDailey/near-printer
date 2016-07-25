// Note that React is necessary to use the jsx syntax here.
import React from 'react'
import RenderReactApp from './RenderReactApp'

import MapContainer from './MapContainer'

import RaisedButton from 'material-ui/RaisedButton';


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
		<RaisedButton label="The Easy Print Button" onClick={handleClickedEasyButton} style={fixedElementsStyle} />
	</div>)
