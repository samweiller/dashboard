// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_MENU = 'incident/TOGGLE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export function toggleMenu () {
  return {
    type : TOGGLE_MENU,
  }
}

export const actions = {
  toggleMenu,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_MENU]    : (state, action) => ({
    ...state,
    isOpen: !state.isOpen,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isOpen: true,
}

export default function incidentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
