import * as types from 'store/types'

const initialState = {
  error: null,
  isLoading: false,
  home_data: null,
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        home_data: action.data
      }
    case types.GET_HOME_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default home