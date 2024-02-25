import apiInstance from '../config/api/axios'

export const getUserProfile = async() => {
  const response = await apiInstance.get('profile')
  return response
}

export const updateProfile = async(payload) => {
  const response = await apiInstance.post('update-profile', payload)
  return response
}

