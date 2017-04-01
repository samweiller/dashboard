import React from 'react'

export const Chat = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Chat Component {props.count}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Chat.propTypes = {
  count     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Chat
