import { connect } from 'react-redux'
import { increment, filter } from '../modules/map'

import Map from '../components/Map'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  increment : () => increment(1),
  filter,
}

const mapStateToProps = (state) => {
  return ({
    count : state.map.count,
    isFetching : state.map.isFetching,
    incidents : state.map.incidents,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
