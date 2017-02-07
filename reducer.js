import * as ActionType from './action'

const defaultState = {
  list: [],
  current: {}
}

export default function(state = defaultState, action) {
  switch(action.type) {

    case ActionType.GET_LIST_SUCCESS:
      return state

  }
}
