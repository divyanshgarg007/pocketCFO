/* eslint-disable import/namespace */
import * as actionTypes from '../actions/actionsTypes'

const INITIAL_STATE = {
  getMasterData: {
    data: null,
    loading: false,
    error: null,
  },
  organizationList: {
    data: null,
    loading: false,
    error: null,
  },
  // organizationList: null,
}

const masterReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MASTER_DATA_REQUEST:
      return {
        ...state,
        getMasterData: {
          ...state.getMasterData,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.MASTER_DATA_SUCCESS:
      return {
        ...state,
        getMasterData: {
          ...state.getMasterData,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.MASTER_DATA_FAILURE:
      return {
        ...state,
        getMasterData: {
          ...state.getMasterData,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ORGANIZATION_LIST_REQUEST:
      return {
        ...state,
        organizationList: {
          ...state.organizationList,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ORGANIZATION_LIST_SUCCESS:
      return {
        ...state,
        organizationList: {
          ...state.organizationList,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ORGANIZATION_LIST_FAILURE:
      return {
        ...state,
        organizationList: {
          ...state.organizationList,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export default masterReducers
