import { connect } from 'react-redux'
import { toggleMenu } from '../modules/incidentList'

import IncidentList from '../components/IncidentList'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  toggleMenu,
}

const mapStateToProps = (state) => {
  return ({
    isOpen : state.incident.isOpen
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentList)
