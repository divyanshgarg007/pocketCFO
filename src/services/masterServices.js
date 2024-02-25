import apiInstance from '../config/api/axios'

export const getMasterData = async() => {
  // let config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'accept': 'application/json',
  //   },
  // }
  const response = await apiInstance.get('master-data')
  return response
}

export const getOrganizationListData = async() => {
  const response = await apiInstance.get('org-list')
  return response
}
