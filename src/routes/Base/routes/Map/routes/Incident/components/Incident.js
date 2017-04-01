import React from 'react'

export const Incident = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Incident</h2>
    <button className='btn btn-default' onClick={props.toggleMenu}>
      Toggle menu {props.isOpen ? 'closed' : 'open'}
    </button>
  </div>
)

Incident.propTypes = {
  isOpen     : React.PropTypes.bool.isRequired,
  toggleMenu : React.PropTypes.func.isRequired
}

export default Incident
