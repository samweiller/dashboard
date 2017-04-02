import React from 'react'
import ReactDOM from 'react-dom'
import ReactMapboxGl, { Layer, ScaleControl, ZoomControl, Feature, GeoJSONLayer, Marker } from "react-mapbox-gl";
// const position = [37.78, -122.40]

export default class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popup: null,
      center: [ -77.01239, 38.91275 ]
    };
  }

  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v8"
        accessToken="pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
        center={this.state.center}
        containerStyle={{
          height: "100vh",
          width:"100%"
        }}>
          <ScaleControl/>
          <ZoomControl/>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[37.78, -122.40]} />
          </Layer>
      </ReactMapboxGl>
    )
  }
}
