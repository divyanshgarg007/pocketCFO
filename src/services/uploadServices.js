import apiInstance from '../config/api/axios'

export const uploadData = async(payload) => {
  const response = await apiInstance.post('add-image', payload)
  return response
}
