import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/chat'

import Chat from '../components/Chat'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => {
  return ({
    count : state.chat.count
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
