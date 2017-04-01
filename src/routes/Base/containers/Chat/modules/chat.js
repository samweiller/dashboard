import { loop, Effects } from 'redux-loop';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'chat/COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'chat/COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().chat
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => ({
    ...state,
    count: state.count + action.payload,
  }),
  [COUNTER_DOUBLE_ASYNC] : (state, action) => ({
    ...state,
    count: state.count * 2
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0,
}

export default function chatReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
