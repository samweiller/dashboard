import { loop, Effects } from 'redux-loop';
import config from '../../../../../config'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'map/COUNTER_INCREMENT'

export const FILTER = 'map/FILTER'
export const FILTER_SUCCESS = 'map/FILTER_SUCCESS'
export const FILTER_ERROR = 'map/FILTER_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function filter (params) {
  return {
    type : FILTER,
    payload : {
      method: 'GET',
      endpoint: config.apiServerUrl + '/incidents?write_key=' + config.apiWriteKey,
      params
    },
  }
}

export const actions = {
  increment,
  filter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT] : (state, action) => ({
    ...state,
    count: state.count + action.payload,
  }),
  [FILTER] : (state, action) => loop(
    {
      ...state,
      isFetching: true,
    },
    Effects.promise(filterEffect, action)
  ),
  [FILTER_SUCCESS] : (state, action) => ({
    ...state,
    isFetching: false,
    count: state.count * 2,
  }),
  [FILTER_ERROR] : (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  count: 0,
  isFetching: false,
  error: null,
}

export default function mapReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


// ------------------------------------
// Effects
// ------------------------------------

function filterEffect({ payload: { method, endpoint, params } }) {
  return fetch(endpoint, { method })
    .then(res => (console.log('resss', res), res.json()))
    .then(json => {
      return {
        type: FILTER_SUCCESS,
        payload: { data: json, sent: params },
      }
    })
    .then(null, error => {
      return {
        type: FILTER_ERROR,
        payload: error,
      }
    })
}
