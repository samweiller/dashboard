import React from 'react'
import ReactDOM from 'react-dom'
import './Map.scss'
import ReactMapboxGl, { Layer, ScaleControl, ZoomControl, Feature, GeoJSONLayer, Marker, Cluster } from "react-mapbox-gl";
// const position = [37.78, -122.40]

// DUMMY COORDS
var incidents = []
const markerCoord = [
  [-122.403779, 37.781743],
  [-22.403779, 67.781743],
  [-22.403779, 67.781743],
  [-42.403779, 77.781743]
];

const coords = [-122.419433, 37.774460]

const markerStyles = {
  width: 30,
  height: 30,
  borderRadius: '50%',
  backgroundColor: '#E0E0E0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #C9C9C9'
};

const clusterStyles = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#51D5A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    border: '2px solid #56C498'
};

export default class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [ -122.403779, 37.781743 ],
      zoom: [11],
      skip: 0,
      incidents: new Map(),
      popupShowLabel: true
    };
    this.onMarkerClick.bind(this);
  }

   //  componentWillMount() {
   //    console.log(incidents)
   //     this.setState(({ incidents }) => ({
   //      incidents: incidents.merge(incidents.reduce((acc, incident) => {
   //        return acc.set(incident.id[0], new Map({
   //          id: incident.id[0],
   //          name: incident.name[0],
   //          position: [ parseFloat(incident.longitude[0]), parseFloat(station.latitude[0]) ],
   //        }))
   //      }, new Map()))
   //    }));
   // }

   // incidents = new Map()

   _markerClick = (station, { feature }) => {
    this.setState({
      center: feature.geometry.coordinates,
      zoom: [14],
      station,
    });
  }



  // Click Handler
  onMarkerClick(coords) {
    console.log(coords);
  }

  // Cluster Factory
   clusterMarker = (coordinates, pointCount) => (
     <Marker coordinates={coordinates} key={coordinates.toString()} style={clusterStyles}>
       { pointCount }
     </Marker>
   );

  render() {
     const { incidents } = this.props
    return (
      // const { incidents, incident, skip, end, popupShowLabel, fitBounds } = this.state;
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
        zoom={[13]}
        center={this.state.center}
        containerStyle={{
          height: "100vh",
          width: "100%"
        }}>
          <ScaleControl/>
          <ZoomControl/>

          <Cluster ClusterMarkerFactory={this.clusterMarker} clusterThreshold={8}>
            {
              incidents.map((incident, key) => (
                <Marker
                  key={key}
                  style={markerStyles}
                  className="test"
                  coordinates={[incident.longitude, incident.latitude ]}
                  onclick={this.onMarkerClick}>
                  {incident.address}
                  {incident.description}
                </Marker>
              ))
            }
          </Cluster>

          <Marker
            style={markerStyles}
            className="test"
            coordinates={coords}
            onclick={this.onMarkerClick.bind(this)}>

          </Marker>
      </ReactMapboxGl>
    )
  }
}
