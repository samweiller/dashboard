import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import { Link } from 'react-router'
import './BaseView.scss'
import Menu from '../containers/Menu'

export const BaseView = (props) => (
  <div>
    <h4>Base</h4>
    <Link to='/base/map' activeClassName='route--active'>
      Map
    </Link>
    <Link to='/base/onboarding' activeClassName='route--active'>
      Onboarding
    </Link>
    <Menu />
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
    {props.children}
  </div>
)

export default BaseView
