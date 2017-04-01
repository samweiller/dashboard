import React from 'react'

export const Map = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Map {props.count}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.filter}>
      Fetch data
    </button>
  </div>
)

Map.propTypes = {
  count       : React.PropTypes.number.isRequired,
  filter      : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Map
