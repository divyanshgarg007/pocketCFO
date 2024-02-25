/* eslint-disable import/namespace */
import * as actionTypes from '../actions/actionsTypes'

const INITIAL_STATE = {
  getOrganization: {
    data: null,
    loading: false,
    error: null,
  },
  updateOrganization: {
    data: null,
    loading: false,
    error: null,
  },
  getChartsOfAccount: {
    data: null,
    loading: false,
    error: null,
  },
  addChartsOfAccount: {
    data: null,
    loading: false,
    error: null,
  },
  updateChartsOfAccount: {
    data: null,
    loading: false,
    error: null,
  },
  getVatCodes: {
    data: null,
    loading: false,
    error: null,
  },
  addVatCodes: {
    data: null,
    loading: false,
    error: null,
  },
  updateVatCodes: {
    data: null,
    loading: false,
    error: null,
  },
  addInviteUser: {
    data: null,
    loading: false,
    error: null,
  },
  addOrganization: {
    data: null,
    loading: false,
    error: null,
  },
}

const settingReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ORGANIZATION_REQUEST:
      return {
        ...state,
        getOrganization: {
          ...state.getOrganization,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_ORGANIZATION_SUCCESS:
      return {
        ...state,
        getOrganization: {
          ...state.getOrganization,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_ORGANIZATION_FAILURE:
      return {
        ...state,
        getOrganization: {
          ...state.getOrganization,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_ORGANIZATION_REQUEST:
      return {
        ...state,
        updateOrganization: {
          ...state.updateOrganization,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        updateOrganization: {
          ...state.updateOrganization,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_ORGANIZATION_FAILURE:
      return {
        ...state,
        updateOrganization: {
          ...state.updateOrganization,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_CHARTS_ACCOUNT_REQUEST:
      return {
        ...state,
        getChartsOfAccount: {
          ...state.getChartsOfAccount,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_CHARTS_ACCOUNT_SUCCESS:
      return {
        ...state,
        getChartsOfAccount: {
          ...state.getChartsOfAccount,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_CHARTS_ACCOUNT_FAILURE:
      return {
        ...state,
        getChartsOfAccount: {
          ...state.getChartsOfAccount,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ADD_CHARTS_ACCOUNT_REQUEST:
      return {
        ...state,
        addChartsOfAccount: {
          ...state.addChartsOfAccount,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ADD_CHARTS_ACCOUNT_SUCCESS:
      return {
        ...state,
        addChartsOfAccount: {
          ...state.addChartsOfAccount,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ADD_CHARTS_ACCOUNT_FAILURE:
      return {
        ...state,
        addChartsOfAccount: {
          ...state.addChartsOfAccount,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_CHARTS_ACCOUNT_REQUEST:
      return {
        ...state,
        updateChartsOfAccount: {
          ...state.updateChartsOfAccount,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_CHARTS_ACCOUNT_SUCCESS:
      return {
        ...state,
        updateChartsOfAccount: {
          ...state.updateChartsOfAccount,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_CHARTS_ACCOUNT_FAILURE:
      return {
        ...state,
        updateChartsOfAccount: {
          ...state.updateChartsOfAccount,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GET_VAT_CODES_REQUEST:
      return {
        ...state,
        getVatCodes: {
          ...state.getVatCodes,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GET_VAT_CODES_SUCCESS:
      return {
        ...state,
        getVatCodes: {
          ...state.getVatCodes,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GET_VAT_CODES_FAILURE:
      return {
        ...state,
        getVatCodes: {
          ...state.getVatCodes,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ADD_VAT_CODES_REQUEST:
      return {
        ...state,
        addVatCodes: {
          ...state.addVatCodes,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ADD_VAT_CODES_SUCCESS:
      return {
        ...state,
        addVatCodes: {
          ...state.addVatCodes,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ADD_VAT_CODES_FAILURE:
      return {
        ...state,
        addVatCodes: {
          ...state.addVatCodes,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.UPDATE_VAT_CODES_REQUEST:
      return {
        ...state,
        updateVatCodes: {
          ...state.updateVatCodes,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.UPDATE_VAT_CODES_SUCCESS:
      return {
        ...state,
        updateVatCodes: {
          ...state.updateVatCodes,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.UPDATE_VAT_CODES_FAILURE:
      return {
        ...state,
        updateVatCodes: {
          ...state.updateVatCodes,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ADD_INVITE_USER_REQUEST:
      return {
        ...state,
        addInviteUser: {
          ...state.addInviteUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ADD_INVITE_USER_SUCCESS:
      return {
        ...state,
        addInviteUser: {
          ...state.addInviteUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ADD_INVITE_USER_FAILURE:
      return {
        ...state,
        addInviteUser: {
          ...state.addInviteUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.ADD_ORGANIZATION_REQUEST:
      return {
        ...state,
        addOrganization: {
          ...state.addOrganization,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.ADD_ORGANIZATION_SUCCESS:
      return {
        ...state,
        addOrganization: {
          ...state.addOrganization,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.ADD_ORGANIZATION_FAILURE:
      return {
        ...state,
        addOrganization: {
          ...state.addOrganization,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.CLEANUP_TOAST:
      return {
        ...state,
        updateOrganization: {
          data: null,
          loading: false,
          error: null,
        },
        addChartsOfAccount: {
          data: null,
          loading: false,
          error: null,
        },
        addVatCodes: {
          data: null,
          loading: false,
          error: null,
        },
        updateVatCodes: {
          data: null,
          loading: false,
          error: null,
        },
        addInviteUser: {
          data: null,
          loading: false,
          error: null,
        },
        addOrganization: {
          data: null,
          loading: false,
          error: null,
        },
      }
    default:
      return state
  }
}

export default settingReducers
