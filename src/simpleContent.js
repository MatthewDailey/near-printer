import React from 'react'
import RenderReactApp from './RenderReactApp'

import {Grid, Row} from 'react-flexbox-grid/lib';

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
