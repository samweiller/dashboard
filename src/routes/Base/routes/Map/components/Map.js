import React from 'react'

import { Link } from 'react-router'
import MapView from './MapView'

class Map extends React.Component {
  componentDidMount() {
    this.props.filter()
  }

  render() {
    const { incidents, isFetching } = this.props
    const loading = isFetching ? <h3>Loading...</h3> : null

    return <div style={{ margin: '0 auto' }} >
      {loading}
      <h2>{incidents.length} total raheem reports</h2>

      <button className='btn btn-default' onClick={this.props.filter}>
        Refresh data
      </button>

      <Link to='/base/map/incidents' activeClassName='route--active'>
        View List of Incidents
      </Link>

      <MapView />

      {this.props.children}
    </div>
  }
}

Map.propTypes = {
  count       : React.PropTypes.number.isRequired,
  isFetching  : React.PropTypes.bool.isRequired,
  incidents   : React.PropTypes.array.isRequired,
  filter      : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Map
