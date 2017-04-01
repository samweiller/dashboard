import React from 'react'

import Chat from '../../Chat'

export const Menu = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Menu</h2>
    <button className='btn btn-default' onClick={props.toggleMenu}>
      Toggle menu {props.isOpen ? 'closed' : 'open'}
    </button>
  </div>
)

Menu.propTypes = {
  isOpen     : React.PropTypes.bool.isRequired,
  toggleMenu : React.PropTypes.func.isRequired
}

export default Menu
