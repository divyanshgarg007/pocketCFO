/* eslint-disable import/namespace */
/* eslint-disable no-unused-vars */
import * as masterServices from '../../services/masterServices'
import {setItem, toBase64} from '../../utilities/authUtils'
import * as actionTypes from './actionsTypes'

// actions for master data access
const masterDataRequest = () => {
  return {
    type: actionTypes.MASTER_DATA_REQUEST,
  }
}

const masterDataSuccess = (data) => {
  return {
    type: actionTypes.MASTER_DATA_SUCCESS,
    payload: data,
  }
}

const masterDataFailure = (error) => {
  return {
    type: actionTypes.MASTER_DATA_FAILURE,
    payload: error,
  }
}

//masterData action
export const masterDataAction = (payload) =>
  async(dispatch) => {
    dispatch(masterDataRequest())
    try {
      const responseData = await masterServices.getMasterData(payload)
      if (responseData?.status === 200) {
        dispatch(masterDataSuccess(responseData?.data))
      } else {
        dispatch(masterDataFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(masterDataFailure(error?.response?.data))
    }
  }

// actions for organization list data access
const organizationListRequest = () => {
  return {
    type: actionTypes.ORGANIZATION_LIST_REQUEST,
  }
}

const organizationListSuccess = (data) => {
  return {
    type: actionTypes.ORGANIZATION_LIST_SUCCESS,
    payload: data,
  }
}

const organizationListFailure = (error) => {
  return {
    type: actionTypes.ORGANIZATION_LIST_FAILURE,
    payload: error,
  }
}

//organizationList action
export const organizationListAction = () =>
  async(dispatch) => {
    dispatch(organizationListRequest())
    try {
      const responseData = await masterServices.getOrganizationListData()
      if (responseData?.status === 200) {
        dispatch(organizationListSuccess(responseData?.data))
      } else {
        dispatch(organizationListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(organizationListFailure(error?.response?.data))
    }
  }

// cleanUp toast
const cleanUp = () => {
  return {
    type: actionTypes.CLEANUP_TOAST,
  }
}
export const cleanUpToast = () =>
  async(dispatch) => {
    dispatch(cleanUp())
  }
