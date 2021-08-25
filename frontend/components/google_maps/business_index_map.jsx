import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Geocode from "react-geocode";

const mapStyles = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "absolute",
  width: "30%",
  height: "100%",
  right: "0px",
  background: "gray",
  overflow: "hidden",
};



export class BusinessIndexMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      center: {
        lat: 34.0488,
        lng: 118.2518,
      },
      selectedPlace: {
        info: {
          name: "",
          address: "",
        },
      },
      markers: [],
    };
    this.recenterMap = this.recenterMap.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  componentDidMount() {
    Geocode.setApiKey(window.googleAPIKey);
    const businesses = this.props.businesses;
    businesses.map((business) => {
      let address =
        business.address + " " + business.city + " " + business.state;
      let markerInfo = {
        coords: "",
        name: business.name,
      };
      Geocode.fromAddress(address).then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        let oldMarkers = this.state.markers;
        markerInfo.coords = { lat: lat, lng: lng };
        oldMarkers = oldMarkers.concat(markerInfo);
        this.setState({
          markers: oldMarkers,
          center: markerInfo.coords,
        //   name: markerInfo.name,
        });
      }),
        (error) => {
          console.error(error);
        };
    });
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  recenterMap(mapProps, map, event) {
    this.setState({ center: event.latLng });
  }

  onMarkerClick = (props, marker, e) => {
    return this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map
        disableDoubleClickZoom={true}
        streetViewControl={false}
        mapTypeControl={false}
        ref="map"
        google={this.props.google}
        zoom={13}
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
            onClick={this.onMarkerClick}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h3>{this.state.selectedPlace.info.name}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => {
  return {
    apiKey: window.googleAPIKey,
  }
})(BusinessIndexMap)