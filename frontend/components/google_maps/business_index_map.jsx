import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Geocode from "react-geocode";
const googleMapsAPI = require("../../config/keys").googleMapsAPI;

const mapStyles = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "relative",
  width: "70rem",
  height: "30rem",
  marginLeft: "20rem",
  background: "gray",
};

Geocode.setApiKey(googleMapsAPI);

export class BusinessIndexMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: {},
      center: {},
      markers: [],
    };
    this.recenterMap = this.recenterMap.bind(this);
    this.getLatLong = this.getLatLong.bind(this);
  }

  componentDidMount() {
    const businesses = this.props.businesses;
    let markerInfo = businesses.map(business => ({
        address: business.address
    }))
    markerInfo.forEach(info => this.getLatLong(info));
  }

  componentDidUpdate(prevProps) {}

  recenterMap(mapProps, map, event) {
    this.setState({ center: event.latLng });
  }

  getLatLong(markerInfo) {
    Geocode.fromAddress(markerInfo).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        let oldMarkers = this.state.markers;
        markerInfo.location.coords = { lat: lat, lng: lng };
        oldMarkers = oldMarkers.concat(markerInfo);
        this.setState({ markers: oldMarkers });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <Map
        disableDoubleClickZoom={true}
        streetViewControl={false}
        mapTypeControl={false}
        ref="map"
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        containerStyle={containerStyle}
        center={this.state.center}
        onDblclick={this.recenterMap}
      >
        {this.state.markers.map((markerInfo, idx) => (
          <Marker
            position={markerInfo.location.coords}
            key={`marker-${idx}`}
            info={markerInfo}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsAPI,
})(BusinessIndexMap);
