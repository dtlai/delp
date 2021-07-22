import React, { Component } from "react";
import Geocode from "react-geocode";
const googleMapsAPI = require("../../config/keys").googleMapsAPI;

Geocode.setApiKey(googleMapsAPI);

export class BusinessMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {},
      markerInfo: {}
    };
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
            center: markerInfo.coords,
        })
    })
  }

  render() {
    return (
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.center.lat},${this.state.center.lng}&zoom=13&size=600x300&maptype=roadmap
        &markers=color:red%7Clabel:D%7C${this.state.center.lat},${this.state.center.lng}
        &key=${googleMapsAPI}`}
        alt="no location"
      />
    );
  }
}

