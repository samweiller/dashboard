import React from 'react'
import MapView from './MapView'

export const Map = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Map {props.count}</h2>
    <MapView />
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Map.propTypes = {
  count     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Map
