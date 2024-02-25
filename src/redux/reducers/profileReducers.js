/* eslint-disable import/namespace */
import * as actionTypes from '../actions/actionsTypes'

const INITIAL_STATE = {
  getUserProfile: {
    data: null,
    loading: false,
    error: null,
  },
  updateProfile: {
    data: null,
    loading: false,
    error: null,
  },
}

const settingReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_REQUEST:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_USER_FAILURE:
      return {
        ...state,
        getUserProfile: {
          ...state.getUserProfile,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export default settingReducers
