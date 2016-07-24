import React from 'react'
import RenderReactApp from './RenderReactApp'

import RaisedButton from 'material-ui/RaisedButton';
import {Container, Grid, Col, Row} from 'react-flexbox-grid/lib';

const style = {
	backgroundColor : "#FEFEFE",
	height : "20px"
};

RenderReactApp(
	<Grid>
	    <Row center="xs">
	      	<p>Please log in on the upper right.</p>
	    </Row>
  	</Grid>
  )
