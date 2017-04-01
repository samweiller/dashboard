import React from 'react'
import { browserHistory } from 'react-router'

import './HomeView.scss'

class HomeView extends React.Component {
  componentDidMount() {
    browserHistory.push('/base/onboarding')
  }

  render() {
    return (
      <div>
        Loading
      </div>
    )
  }
}

export default HomeView
