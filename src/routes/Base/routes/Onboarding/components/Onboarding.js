import React from 'react'
import { Link } from 'react-router'

export const Onboarding = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Onboarding {props.count}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>

    <Link to='/base/map' activeClassName='route--active'>
      Done! Go to the map
    </Link>
  </div>
)

Onboarding.propTypes = {
  count     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Onboarding
