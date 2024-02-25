/* eslint-disable no-unused-vars */
import * as authServices from '../../services/authServices'
import * as authUtils from '../../utilities/authUtils'
import * as actionTypes from './actionsTypes'

// actions for login
const loginRequest = () => {
  return {
    type: actionTypes.LOGIN_REQUEST,
  }
}

const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  }
}

const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  }
}

//login action
export const loginAction = (payload) =>
  async(dispatch) => {
    dispatch(loginRequest())
    try {
      const responseData = await authServices.login(payload)
      if (responseData?.status === 200) {
        dispatch(loginSuccess(responseData?.data))
        authUtils.setItem('token', responseData?.data?.responce?.auth_token)
      } else {
        dispatch(loginFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(loginFailure(error?.response?.data))
    }
  }

//actions for signup
const signupRequest = () => {
  return {
    type: actionTypes.SIGNUP_REQUEST,
  }
}

const signupSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: data,
  }
}

const signupFailure = (error) => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
    payload: error,
  }
}

//signup action
export const signupAction = (payload) =>
  async(dispatch) => {
    dispatch(signupRequest())
    try {
      const responseData = await authServices.signup(payload)
      if (responseData?.status === 200) {
        dispatch(signupSuccess(responseData?.data))
      } else {
        dispatch(signupFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(signupFailure(error?.response?.data))
    }
  }

//actions for verify email signup
const signupEmailRequest = () => {
  return {
    type: actionTypes.SIGNUP_EMAIL_REQUEST,
  }
}

const signupEmailSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_EMAIL_SUCCESS,
    payload: data,
  }
}

const signupEmailFailure = (error) => {
  return {
    type: actionTypes.SIGNUP_EMAIL_FAILURE,
    payload: error,
  }
}

//signup action
export const signupEmailAction = (payload) =>
  async(dispatch) => {
    dispatch(signupEmailRequest())
    try {
      const responseData = await authServices.signupEmail(payload)
      if (responseData?.status === 200) {
        dispatch(signupEmailSuccess(responseData?.data))
      } else {
        dispatch(signupEmailFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(signupEmailFailure(error?.response?.data))
    }
  }

//actions for verify email user
const verifyEmailRequest = () => {
  return {
    type: actionTypes.VERIFY_EMAIL_REQUEST,
  }
}

const verifyEmailSuccess = (data) => {
  return {
    type: actionTypes.VERIFY_EMAIL_SUCCESS,
    payload: data,
  }
}

const verifyEmailFailure = (error) => {
  return {
    type: actionTypes.VERIFY_EMAIL_FAILURE,
    payload: error,
  }
}

//signup action
export const verifyEmailAction = (payload) =>
  async(dispatch) => {
    dispatch(verifyEmailRequest())
    try {
      const responseData = await authServices.verifyEmail(payload)
      if (responseData?.status === 200) {
        dispatch(verifyEmailSuccess(responseData?.data))
      } else {
        dispatch(verifyEmailFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(verifyEmailFailure(error?.response?.data))
    }
  }

//actions for google login authenticate
const googleLoginAuthRequest = () => {
  return {
    type: actionTypes.GOOGLE_LOGIN_AUTH_REQUEST,
  }
}

const googleLoginAuthSuccess = (data) => {
  return {
    type: actionTypes.GOOGLE_LOGIN_AUTH_SUCCESS,
    payload: data,
  }
}

const googleLoginAuthFailure = (error) => {
  return {
    type: actionTypes.GOOGLE_LOGIN_AUTH_FAILURE,
    payload: error,
  }
}

//google login auth
export const googleLoginAction = (payload) =>
  async(dispatch) => {
    dispatch(googleLoginAuthRequest())
    try {
      const responseData = await authServices.googleLoginAuth(payload)
      console.log(responseData, 'responseData')
      if (responseData?.status === 200) {
        dispatch(googleLoginAuthSuccess(responseData?.data))
      } else {
        dispatch(googleLoginAuthFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(googleLoginAuthFailure(error?.response?.data))
    }
  }

//actions for verify invite user
const verifyInviteUserRequest = () => {
  return {
    type: actionTypes.VERIFY_INVITE_USER_REQUEST,
  }
}

const verifyInviteUserSuccess = (data) => {
  return {
    type: actionTypes.VERIFY_INVITE_USER_SUCCESS,
    payload: data,
  }
}

const verifyInviteUserFailure = (error) => {
  return {
    type: actionTypes.VERIFY_INVITE_USER_FAILURE,
    payload: error,
  }
}

//signup action
export const verifyInviteUserAction = (payload) =>
  async(dispatch) => {
    dispatch(verifyInviteUserRequest())
    try {
      const responseData = await authServices.verifyInviteUser(payload)
      if (responseData?.status === 200) {
        dispatch(verifyInviteUserSuccess(responseData?.data))
        authUtils.setItem('orgId', authUtils.toBase64(responseData?.data?.responce?.org_id))
      } else {
        dispatch(verifyInviteUserFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(verifyInviteUserFailure(error?.response?.data))
    }
  }

//actions for signup invite user
const signupInviteUserRequest = () => {
  return {
    type: actionTypes.SIGNUP_INVITE_USER_REQUEST,
  }
}

const signupInviteUserSuccess = (data) => {
  return {
    type: actionTypes.SIGNUP_INVITE_USER_SUCCESS,
    payload: data,
  }
}

const signupInviteUserFailure = (error) => {
  return {
    type: actionTypes.SIGNUP_INVITE_USER_FAILURE,
    payload: error,
  }
}

//signup action
export const signupInviteUserAction = (payload) =>
  async(dispatch) => {
    dispatch(signupInviteUserRequest())
    try {
      const responseData = await authServices.signupInviteUser(payload)
      if (responseData?.status === 200) {
        dispatch(signupInviteUserSuccess(responseData?.data))
      } else {
        dispatch(signupInviteUserFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(signupInviteUserFailure(error?.response?.data))
    }
  }


// action for logout
export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: undefined,
  }
}
