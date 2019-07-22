/*global google*/
import React, { Component } from "react";
import "../sass/components/_map.scss";
import { Link } from "react-router-dom";
import '../sass/components/_cta.scss'
import BoulangerLogo from '../img/logo-boulanger.png';


import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
// const google = window.google;
// JE DOIS ENLEVER CE COMMENTAIRE const google

class Map extends Component {
  state = {
    directions: null
  };
  
  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();
    const origin = { lat: 48.8461315, lng: 2.3854732 };
    const destination = { lat: 48.8451245, lng: 2.3730395 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING   
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (


      <GoogleMap
        defaultCenter={{ lat: 48.8461315, lng: 2.3854732 }}
        defaultZoom={20}
        // style={{
        //     minWwidth: "200px",e
        //     minHeight: "200px"
        //   }}
         
          google={this.props.google}
          zoom={18}

          // initialCenter={{
          //   lat: 48.8461315,
          //   lng: 2.3854732
          // }}

          styles={
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
          }
      >

        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>
    ));
    
    
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `60vh`, width: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

      <div id="layoutMap">
        <div id="layoutMapContent">
          <div className="flexBrand">
              <aside>
                  <img src={BoulangerLogo} alt="Time" className="boulangerLogo" />
              </aside>
              <article>
                  <h2>Boulanger</h2>
                  <p>Champs de Mars</p>
              </article>
          </div>
            <Link to="/introduction" className="btn-unfilled" id="playMap">Jouer</Link>
            <br></br>
            <Link to="/section" className="btn-filled">Retour</Link>
        </div>  
      </div>
      </div>
    );
  }
}

export default Map;
