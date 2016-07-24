import React from 'react'
import RenderReactApp from './RenderReactApp'

import RaisedButton from 'material-ui/RaisedButton';
import {Container, Grid, Col, Row} from 'react-flexbox-grid/lib';

const style = {
	backgroundColor : "#FEFEFE",
	height : "20px"
};

const simpleContent = document.getElementById("injectedData").getAttribute("simpleContent");

RenderReactApp(
	<Grid>
	    <Row center="xs">
	      	<p>{simpleContent}</p>
	    </Row>
  	</Grid>
  )
