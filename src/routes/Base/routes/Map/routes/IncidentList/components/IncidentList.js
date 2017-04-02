import React from 'react'
import { Link } from 'react-router'

class IncidentList extends React.Component {
  componentDidMount() {
  }

  render() {
    return <div style={{ margin: '0 auto' }} >
      <h2>Incident List</h2>
      <button className='btn btn-default' onClick={this.props.toggleMenu}>
        Toggle menu {this.props.isOpen ? 'closed' : 'open'}
      </button>

      <Link to='/base/map' activeClassName='route--active'>
        [close]
      </Link>
    </div>
  }
}

IncidentList.propTypes = {
  isOpen : React.PropTypes.bool.isRequired,
  filter : React.PropTypes.func.isRequired
}

export default IncidentList
