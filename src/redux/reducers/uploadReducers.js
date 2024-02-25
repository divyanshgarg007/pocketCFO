/* eslint-disable import/namespace */
import * as actionTypes from '../actions/actionsTypes'

const INITIAL_STATE = {
  uploadData: {
    data: null,
    loading: false,
    error: null,
  },
}

const uploadReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_REQUEST:
      return {
        ...state,
        uploadData: {
          ...state.uploadData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        uploadData: {
          ...state.uploadData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPLOAD_FAILURE:
      return {
        ...state,
        uploadData: {
          ...state.uploadData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_TOAST:
      return {
        ...state,
        uploadData: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}

export default uploadReducers
