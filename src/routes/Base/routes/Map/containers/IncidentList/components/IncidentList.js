import React from 'react'

export const IncidentList = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Incident List</h2>
    <button className='btn btn-default' onClick={props.toggleMenu}>
      Toggle menu {props.isOpen ? 'closed' : 'open'}
    </button>
  </div>
)

IncidentList.propTypes = {
  isOpen     : React.PropTypes.bool.isRequired,
  toggleMenu : React.PropTypes.func.isRequired
}

export default IncidentList
