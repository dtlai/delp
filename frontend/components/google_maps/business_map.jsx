import React, { Component } from "react";
import { StaticGoogleMap, GoogleApiWrapper, Marker, Map } from "google-maps-react";
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

export class BusinessMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 34.0488,
        lng: 118.2518,
      },
      markers: [],
    };
    this.recenterMap = this.recenterMap.bind(this);
  }

  componentDidMount() {
    const business = this.props.business;
    let address = business.address + " " + business.city + " " + business.state;
    let markerInfo = {
      coords: "",
    };
    Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        markerInfo.coords = { lat: lat, lng: lng};
        this.setState({
            markers: [markerInfo],
            center: markerInfo.coords
        })
    })
  }

  componentDidUpdate(prevProps) {}
  
  recenterMap(mapProps, map, event) {
    this.setState({ center: event.latLng });
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
            position={markerInfo.coords}
            key={`marker-${idx}`}
            info={markerInfo}
          />
        ))}
      </Map>
      //   <StaticGoogleMap
      //     size="600x600"
      //     className="img-fluid"
      //   >
      //     <Marker position="6.4488387,3.5496361" color="blue" label="P" />
      //   </StaticGoogleMap>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsAPI,
})(BusinessMap);
