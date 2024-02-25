/* eslint-disable import/namespace */
/* eslint-disable no-unused-vars */
import * as profileServices from '../../services/profileServices'
import * as actionTypes from './actionsTypes'

// actions for get organization
const getUserDetailsRequest = () => {
  return {
    type: actionTypes.GET_USER_REQUEST,
  }
}

const getUserDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: data,
  }
}

const getUserDetailsFailure = (error) => {
  return {
    type: actionTypes.GET_USER_FAILURE,
    payload: error,
  }
}

//getUserDetails action
export const getUserDetailsAction = () =>
  async(dispatch) => {
    dispatch(getUserDetailsRequest())
    try {
      const responseData = await profileServices.getUserProfile()
      if (responseData?.status === 200) {
        dispatch(getUserDetailsSuccess(responseData?.data))
      } else {
        dispatch(getUserDetailsFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getUserDetailsFailure(error?.response?.data))
    }
  }

// actions for update user profile
const updateProfileRequest = () => {
  return {
    type: actionTypes.UPDATE_USER_REQUEST,
  }
}

const updateProfileSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: data,
  }
}

const updateProfileFailure = (error) => {
  return {
    type: actionTypes.UPDATE_USER_FAILURE,
    payload: error,
  }
}

//updateProfile action
export const updateProfileAction = (payload) =>
  async(dispatch) => {
    dispatch(updateProfileRequest())
    try {
      const responseData = await profileServices.updateProfile(payload)
      if (responseData?.status === 200) {
        dispatch(updateProfileSuccess(responseData?.data))
        dispatch(getUserDetailsAction())
      } else {
        dispatch(updateProfileFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(updateProfileFailure(error?.response?.data))
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

