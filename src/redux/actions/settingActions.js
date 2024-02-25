/* eslint-disable import/namespace */
/* eslint-disable no-unused-vars */
import * as settingServices from '../../services/settingServices'
import * as actionTypes from './actionsTypes'
import {masterDataAction} from './masterActions'

// actions for get organization
const getOrganizationRequest = () => {
  return {
    type: actionTypes.GET_ORGANIZATION_REQUEST,
  }
}

const getOrganizationSuccess = (data) => {
  return {
    type: actionTypes.GET_ORGANIZATION_SUCCESS,
    payload: data,
  }
}

const getOrganizationFailure = (error) => {
  return {
    type: actionTypes.GET_ORGANIZATION_FAILURE,
    payload: error,
  }
}

//getOrganization action
export const getOrganizationAction = () =>
  async(dispatch) => {
    dispatch(getOrganizationRequest())
    try {
      const responseData = await settingServices.getOrganization()
      if (responseData?.status === 200) {
        dispatch(getOrganizationSuccess(responseData?.data))
      } else {
        dispatch(getOrganizationFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getOrganizationFailure(error?.response?.data))
    }
  }

// actions for update organization
const updateOrganizationRequest = () => {
  return {
    type: actionTypes.UPDATE_ORGANIZATION_REQUEST,
  }
}

const updateOrganizationSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_ORGANIZATION_SUCCESS,
    payload: data,
  }
}

const updateOrganizationFailure = (error) => {
  return {
    type: actionTypes.UPDATE_ORGANIZATION_FAILURE,
    payload: error,
  }
}

//updateOrganization action
export const updateOrganizationAction = (payload) =>
  async(dispatch) => {
    dispatch(updateOrganizationRequest())
    try {
      const responseData = await settingServices.updateOrganization(payload)
      if (responseData?.status === 200) {
        dispatch(updateOrganizationSuccess(responseData?.data))
        dispatch(getOrganizationAction(payload.orgID))
        dispatch(masterDataAction())
      } else {
        dispatch(updateOrganizationFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updateOrganizationFailure(error?.response?.data))
    }
  }

// actions for get charts of account
const getChartsAccountRequest = () => {
  return {
    type: actionTypes.GET_CHARTS_ACCOUNT_REQUEST,
  }
}

const getChartsAccountSuccess = (data) => {
  return {
    type: actionTypes.GET_CHARTS_ACCOUNT_SUCCESS,
    payload: data,
  }
}

const getChartsAccountFailure = (error) => {
  return {
    type: actionTypes.GET_CHARTS_ACCOUNT_FAILURE,
    payload: error,
  }
}

//get charts account action
export const getChartsAccountAction = (payload) =>
  async(dispatch) => {
    dispatch(getChartsAccountRequest())
    try {
      const responseData = await settingServices.getChartsOfAccounts(payload)
      if (responseData?.status === 200) {
        dispatch(getChartsAccountSuccess(responseData?.data))
      } else {
        dispatch(getChartsAccountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getChartsAccountFailure(error?.response?.data))
    }
  }

// actions for add chart of accounts
const addChartsAccountRequest = () => {
  return {
    type: actionTypes.ADD_CHARTS_ACCOUNT_REQUEST,
  }
}

const addChartsAccountSuccess = (data) => {
  return {
    type: actionTypes.ADD_CHARTS_ACCOUNT_SUCCESS,
    payload: data,
  }
}

const addChartsAccountFailure = (error) => {
  return {
    type: actionTypes.ADD_CHARTS_ACCOUNT_FAILURE,
    payload: error,
  }
}

//addChartsAccount action
export const addChartsAccountAction = (payload) =>
  async(dispatch) => {
    dispatch(addChartsAccountRequest())
    try {
      const responseData = await settingServices.addChartsOfAccounts(payload)
      if (responseData?.status === 200) {
        dispatch(addChartsAccountSuccess(responseData?.data))
        dispatch(getChartsAccountAction())
      } else {
        dispatch(addChartsAccountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(addChartsAccountFailure(error?.response?.data))
    }
  }

// actions for update Charts of Account
const updateChartsAccountRequest = () => {
  return {
    type: actionTypes.UPDATE_CHARTS_ACCOUNT_REQUEST,
  }
}

const updateChartsAccountSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_CHARTS_ACCOUNT_SUCCESS,
    payload: data,
  }
}

const updateChartsAccountFailure = (error) => {
  return {
    type: actionTypes.UPDATE_CHARTS_ACCOUNT_FAILURE,
    payload: error,
  }
}

//updateChartsAccount action
export const updateChartsAccountAction = (payload) =>
  async(dispatch) => {
    dispatch(updateChartsAccountRequest())
    try {
      const responseData = await settingServices.updateChartsOfAccounts(payload)
      if (responseData?.status === 200) {
        dispatch(updateChartsAccountSuccess(responseData?.data))
        dispatch(getChartsAccountAction())
      } else {
        dispatch(updateChartsAccountFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updateChartsAccountFailure(error?.response?.data))
    }
  }

// actions for get vat codes
const getVatCodesRequest = () => {
  return {
    type: actionTypes.GET_VAT_CODES_REQUEST,
  }
}

const getVatCodesSuccess = (data) => {
  return {
    type: actionTypes.GET_VAT_CODES_SUCCESS,
    payload: data,
  }
}

const getVatCodesFailure = (error) => {
  return {
    type: actionTypes.GET_VAT_CODES_FAILURE,
    payload: error,
  }
}

//getVatCodes action
export const getVatCodesAction = () =>
  async(dispatch) => {
    dispatch(getVatCodesRequest())
    try {
      const responseData = await settingServices.getVatCodes()
      if (responseData?.status === 200) {
        dispatch(getVatCodesSuccess(responseData?.data))
      } else {
        dispatch(getVatCodesFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getVatCodesFailure(error?.response?.data))
    }
  }

// actions for add vat codes
const addVatCodesRequest = () => {
  return {
    type: actionTypes.ADD_VAT_CODES_REQUEST,
  }
}

const addVatCodesSuccess = (data) => {
  return {
    type: actionTypes.ADD_VAT_CODES_SUCCESS,
    payload: data,
  }
}

const addVatCodesFailure = (error) => {
  return {
    type: actionTypes.ADD_VAT_CODES_FAILURE,
    payload: error,
  }
}

//addVatCodes action
export const addVatCodesAction = (payload) =>
  async(dispatch) => {
    dispatch(addVatCodesRequest())
    try {
      const responseData = await settingServices.addVatCodes(payload)
      if (responseData?.status === 200) {
        dispatch(addVatCodesSuccess(responseData?.data))
        dispatch(getVatCodesAction())
      } else {
        dispatch(addVatCodesFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(addVatCodesFailure(error?.response?.data))
    }
  }

// actions for update vat codes
const updateVatCodesRequest = () => {
  return {
    type: actionTypes.UPDATE_VAT_CODES_REQUEST,
  }
}

const updateVatCodesSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_VAT_CODES_SUCCESS,
    payload: data,
  }
}

const updateVatCodesFailure = (error) => {
  return {
    type: actionTypes.UPDATE_VAT_CODES_FAILURE,
    payload: error,
  }
}

//updateVatCodes action
export const updateVatCodesAction = (payload) =>
  async(dispatch) => {
    dispatch(updateVatCodesRequest())
    try {
      const responseData = await settingServices.updateVatCodes(payload)
      if (responseData?.status === 200) {
        dispatch(updateVatCodesSuccess(responseData?.data))
        dispatch(getVatCodesAction())
      } else {
        dispatch(updateVatCodesFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updateVatCodesFailure(error?.response?.data))
    }
  }

// actions for add invite users
const addInviteUserRequest = () => {
  return {
    type: actionTypes.ADD_INVITE_USER_REQUEST,
  }
}

const addInviteUserSuccess = (data) => {
  return {
    type: actionTypes.ADD_INVITE_USER_SUCCESS,
    payload: data,
  }
}

const addInviteUserFailure = (error) => {
  return {
    type: actionTypes.ADD_INVITE_USER_FAILURE,
    payload: error,
  }
}

//addInviteUser action
export const addInviteUserAction = (payload) =>
  async(dispatch) => {
    dispatch(addInviteUserRequest())
    try {
      const responseData = await settingServices.addInviteUser(payload)
      if (responseData?.status === 200) {
        dispatch(addInviteUserSuccess(responseData?.data))
      } else {
        dispatch(addInviteUserFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(addInviteUserFailure(error?.response?.data))
    }
  }

// actions for add organization
const addOrganizationRequest = () => {
  return {
    type: actionTypes.ADD_ORGANIZATION_REQUEST,
  }
}

const addOrganizationSuccess = (data) => {
  return {
    type: actionTypes.ADD_ORGANIZATION_SUCCESS,
    payload: data,
  }
}

const addOrganizationFailure = (error) => {
  return {
    type: actionTypes.ADD_ORGANIZATION_FAILURE,
    payload: error,
  }
}

//addOrganization action
export const addOrganizationAction = (payload) =>
  async(dispatch) => {
    dispatch(addOrganizationRequest())
    try {
      const responseData = await settingServices.addOrganization(payload)
      if (responseData?.status === 200) {
        dispatch(addOrganizationSuccess(responseData?.data))
        dispatch(masterDataAction())
      } else {
        dispatch(addOrganizationFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(addOrganizationFailure(error?.response?.data))
    }
  }

// Toast clean state
const cleanUp = () => {
  return {
    type: actionTypes.CLEANUP_TOAST,
  }
}
export const cleanUpToast = () =>
  async(dispatch) => {
    dispatch(cleanUp())
  }

