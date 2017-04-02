import React from 'react'
import { Link } from 'react-router'

class IncidentList extends React.Component {
  componentDidMount() {
  }

  renderIncident(incident) {
    return <p key={incident.slug}>{incident.reactions_list}</p>
  }

  render() {
    const incidents = this.props.incidents.map(this.renderIncident)

    return <div style={{ margin: '0 auto' }} >
      <h2>Incident List</h2>

      <Link to='/base/map' activeClassName='route--active'>
        [close]
      </Link>

      <div className='list'>
        {incidents}
      </div>
    </div>
  }
}

IncidentList.propTypes = {
  filter    : React.PropTypes.func.isRequired,
  incidents : React.PropTypes.array.isRequired,
}

export default IncidentList
