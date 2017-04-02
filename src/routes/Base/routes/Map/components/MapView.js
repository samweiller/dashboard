import React from 'react'
import ReactDOM from 'react-dom'
import './Map.scss'
import ReactMapboxGl, { Layer, ScaleControl, ZoomControl, Feature, GeoJSONLayer, Marker, Cluster, Popup } from "react-mapbox-gl";
import styles from './sample-style.style';

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

const markerSize = 20;

const markerStyles = [
   {
     width: markerSize,
     height: markerSize,
     borderRadius: '50%',
     backgroundColor: '#DD4841',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     border: '2px solid #FFFFFF'
  }, {
    width: markerSize,
    height: markerSize,
    borderRadius: '50%',
    backgroundColor: '#F3908B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #FFFFFF'
}, {
  width: markerSize,
  height: markerSize,
  borderRadius: '50%',
  backgroundColor: '#EED5AF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #FFFFFF'
}, {
  width: markerSize,
  height: markerSize,
  borderRadius: '50%',
  backgroundColor: '#93C9F3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #FFFFFF'
}, {
  width: markerSize,
  height: markerSize,
  borderRadius: '50%',
  backgroundColor: '#2793E6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid #FFFFFF'
}
]

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

const popupStyle = {
    background: "#fff",
    padding: "5px",
    borderRadius: "2px"
}

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

   _markerClick = (incident, { feature }) => {
    this.setState({
      incident,
      center: [incident.longitude, incident.latitude]
    });
    console.log(incident)
  }

  _popupChange(popupShowLabel) {
     this.setState({ popupShowLabel });
     console.log(incident)
   }

   toggle = true;


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
     const { incidents, popupShowLabel } = this.props
     const incident = this.props.state
     console.log(incidents)
    return (
      // const { incidents, incident, skip, end, popupShowLabel, fitBounds } = this.state;
      <div>
      <ReactMapboxGl
        style="mapbox://styles/raheemdashboard/cj112srai00262rpflemfz0d2"
        accessToken="pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
        center={this.state.center}
        containerStyle={{
          height: "100vh",
          width: "100%"
        }}>
        {this.state.incident ? this.state.incident.description:"NO INCIDENT"}
          <ScaleControl/>
          <ZoomControl/>

            {
              incidents.map((incident, key) => (
                <Marker
                  key={key}
                  style={markerStyles[incident.rating-1]}
                  className="incident-marker"
                  coordinates={[incident.longitude, incident.latitude ]}
                  onClick={this._markerClick.bind(this, incident)}>
                </Marker>
             ))
            }

            {
            this.state.incident && (
              <Popup
                key={this.state.incident.key}
                offset={[0, -50]}
                coordinates={[this.state.incident.longitude, this.state.incident.latitude]}>
                <div>
                  <span style={{
                    ...styles.popup,
                    display: popupShowLabel ? "block" : "none"
                  }}>

                  </span>
                  <div onClick={this._popupChange.bind(this, !popupShowLabel)}>
                  {this.state.incident.address}

                    {this.state.incident.description}
                  </div>
                </div>
              </Popup>
            )
          }

      </ReactMapboxGl>

      </div>
    )
  }
}
