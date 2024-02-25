import apiInstance from '../config/api/axios'

export const login = async(payload) => {
  const response = await apiInstance.post('login', payload)
  return response
}

export const signup = async(payload) => {
  const response = await apiInstance.post('register', payload)
  return response
}

export const signupEmail = async(payload) => {
  const response = await apiInstance.post('signup-email', payload)
  return response
}

export const verifyEmail = async(payload) => {
  const response = await apiInstance.post('verify-signup-token', payload)
  return response
}

export const googleLoginAuth = async(payload) => {
  const response = await apiInstance.get(`google-auth-callback${payload}`)
  return response
}

export const verifyInviteUser = async(payload) => {
  const response = await apiInstance.post('verify-user-invitation-token', payload)
  return response
}

export const signupInviteUser = async(payload) => {
  const response = await apiInstance.post('register-invite-user', payload)
  return response
}
