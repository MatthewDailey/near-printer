import React from 'react'
import ReactDOM from 'react-dom'

var GoogleApiComponent = require('google-maps-react').GoogleApiWrapper

class MapContainer extends React.Component {
	render() {
		const style = {
			width: '100vw',
			height: '100%',
			position: 'absolute'
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
			let lat = 37.7773248;
			let lng = -122.4110832;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign({}, {
				center: center,
				zoom: zoom
			});


			const map = new maps.Map(node, mapConfig);

	        if (window.Promise) {
			  console.log('Promise found');

			  var promise = new Promise(function(resolve, reject) {
			    var request = new XMLHttpRequest();

			    request.open('GET', '/getPrinters');
			    request.onload = function() {
			      if (request.status == 200) {
			        resolve(request.response); // we got data here, so resolve the Promise
			      } else {
			        reject(Error(request.statusText)); // status is not 200 OK, so reject
			      }
			    };

			    request.onerror = function() {
			      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
			    };

			    request.send(); //send the request
			  });

			  console.log('Asynchronous request made.');

			  promise.then(function(data) {
			    console.log('Got data! Promise fulfilled.');
			    const printers = JSON.parse(data);

			    for (let printerKey in printers) {
			    	var printer = printers[printerKey];
			    	console.log(printer)
			    	lat = printer.lat;
			    	lng = printer.lon;
			    	var printerPosition = {lat, lng}

					const easyButtonMarker = new google.maps.Marker({
					    position: printerPosition,
					    map: map,
					    title: 'Hello World!',
					    animation: google.maps.Animation.DROP
					});
			    }

			  }, function(error) {
			    console.log('Promise rejected.');
			    console.log(error.message);
			  });
			} else {
			  console.log('Promise not available');
			}


		}
	}
}


module.exports = GoogleApiComponent({
	apiKey: "AIzaSyDUdxk0nyywYSJBr8KoL-PSecv3QCdMdug"
})(MapContainer)
