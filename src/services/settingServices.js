import apiInstance from '../config/api/axios'

export const getOrganization = async() => {
  const response = await apiInstance.get('org-settings')
  return response
}

export const updateOrganization = async(payload) => {
  const response = await apiInstance.post('update-organization', payload)
  return response
}

export const getChartsOfAccounts = async() => {
  const response = await apiInstance.get('charts-of-account-list')
  return response
}

export const addChartsOfAccounts = async(payload) => {
  const response = await apiInstance.post('add-charts-of-account', payload)
  return response
}

export const updateChartsOfAccounts = async(payload) => {
  const response = await apiInstance.post('update-charts-of-account', payload)
  return response
}

export const getVatCodes = async(payload) => {
  const response = await apiInstance.get('vat-code-list', payload)
  return response
}

export const addVatCodes = async(payload) => {
  const response = await apiInstance.post('add-vat-code', payload)
  return response
}

export const updateVatCodes = async(payload) => {
  const response = await apiInstance.post('update-vat-code', payload)
  return response
}

export const addInviteUser = async(payload) => {
  const response = await apiInstance.post('invite-new-user', payload)
  return response
}

export const addOrganization = async(payload) => {
  const response = await apiInstance.post('add-organization', payload)
  return response
}
