import React from 'react'
import ReactDOM from 'react-dom'

var GoogleApiComponent = require('google-maps-react').GoogleApiWrapper

class MapContainer extends React.Component {
	render() {
		const style = {
			width: '100vw',
			top: 0,
			bottom: 0,
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

	getZoom() {
		console.log(window.innerWidth)
		if (window.innerWidth > 1500) {
			return 14;
		} else {
			return 13;
		}
	}

	loadMap() {
		if (this.props && this.props.google) {
			const {google} = this.props;
			const maps = google.maps;

			const mapRef = this.refs.map;
			const node = ReactDOM.findDOMNode(mapRef);

			const zoom = this.getZoom();
			const center = new maps.LatLng(37.7606271, -122.4427809);
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

			  promise.then(function(data) {
			    const printers = JSON.parse(data);

			    for (let printerKey in printers) {
			    	const printer = printers[printerKey];
			    	const lat = printer.lat;
			    	const lng = printer.lon;
			    	const url = printer.url;
			    	var printerPosition = {lat, lng}

					const printerMarker = new google.maps.Marker({
					    position: printerPosition,
					    map: map,
					    title: printer.title,
					    animation: google.maps.Animation.DROP
					});

					var contentString = '<div id="content">'+
					      '<div id="siteNotice">'+
					      '</div>'+
					      '<h1 id="firstHeading" class="firstHeading">'+printer.title+'</h1>'+
					      '<div id="bodyContent">'+
					      '<p><b>Cost:</b> ' + printer.cost + "</p>" +
					      '<p><b>Hours:</b> ' + printer.hours + "</p>" +
					      '<p><b>Phone:</b> ' + printer.phone + "</p>" +
					      '<p><a target="_blank" href=\"'+ printer.url +'\">View in Google maps.</a>' +
					      '</div>'+
					      '</div>';

					const infowindow = new google.maps.InfoWindow({
						content: contentString
					});

					printerMarker.addListener('click', function() {
						infowindow.open(map, printerMarker);
					});
			    }

			  }, function(error) {
			    console.log('Promise rejected.');
			    console.log(error.message);
			  });
			} else {
			  console.log('Promise not available, not loading printer information.');
			}


		}
	}
}


module.exports = GoogleApiComponent({
	apiKey: "AIzaSyDUdxk0nyywYSJBr8KoL-PSecv3QCdMdug"
})(MapContainer)
