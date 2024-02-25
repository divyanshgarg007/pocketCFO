/* eslint-disable import/namespace */
/* eslint-disable no-unused-vars */
import * as uploadServices from '../../services/uploadServices'
import * as actionTypes from './actionsTypes'

// actions for upload image
const uploadRequest = () => {
  return {
    type: actionTypes.UPLOAD_REQUEST,
  }
}

const uploadSuccess = (data) => {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    payload: data,
  }
}

const uploadFailure = (error) => {
  return {
    type: actionTypes.UPLOAD_FAILURE,
    payload: error,
  }
}

//upload action
export const uploadAction = (payload) =>
  async(dispatch) => {
    dispatch(uploadRequest())
    try {
      const responseData = await uploadServices.uploadData(payload)
      if (responseData?.status === 200) {
        dispatch(uploadSuccess(responseData?.data))
      } else {
        dispatch(uploadFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(uploadFailure(error?.response?.data))
    }
  }

const cleanUp = () => {
  return {
    type: actionTypes.CLEANUP_TOAST,
  }
}
export const cleanUpToast = () =>
  async(dispatch) => {
    dispatch(cleanUp())
  }
