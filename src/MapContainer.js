import React from 'react'
import ReactDOM from 'react-dom'

var GoogleApiComponent = require('google-maps-react').GoogleApiWrapper

class MapContainer extends React.Component {
	render() {
		const style = {
			width: '100vw',
			height: '100vh'
		}
		return (
			<div style={style} ref='map' />
		);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.loaded) {
			this.loadMap();
		}
	}

	loadMap() {
		if (this.props && this.props.google) {
			const {google} = this.props;
			const maps = google.maps;

			const mapRef = this.refs.map;
			const node = ReactDOM.findDOMNode(mapRef);

			let zoom = 14;
			let lat = 37.774929;
			let lng = -122.419416;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign({}, {
				center: center,
				zoom: zoom
			});

			this.map = new maps.Map(node, mapConfig);
		}
	}
}


module.exports = GoogleApiComponent({
	apiKey: "AIzaSyDUdxk0nyywYSJBr8KoL-PSecv3QCdMdug"
})(MapContainer)
