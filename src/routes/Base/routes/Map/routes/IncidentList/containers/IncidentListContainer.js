import { connect } from 'react-redux'
import { filter } from '../../../modules/map'

import IncidentList from '../components/IncidentList'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  filter,
}

const mapStateToProps = (state) => {
  return ({
    incidents: state.map.incidents,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentList)
