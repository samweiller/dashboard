import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'
const position = [37.781811, -122.403693]

export default class MapView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={15}>
          <TileLayer
            // url="https://api.mapbox.com/styles/v1/raheemdashboard/cj0ysvisw000h2ro2heuaqgj9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
            url="https://api.mapbox.com/styles/v1/raheemdashboard/cj0ywoyd2000f2smpapq8d595/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFoZWVtZGFzaGJvYXJkIiwiYSI6ImNqMHlzbHduZjAyZGUzM3NkeTEwYWpocTAifQ.JydAc5Gah9lzgAcrwLt5qQ"
            attribution='Raheem.ai' />
        </Map>
      </div>
    )
  }
}
