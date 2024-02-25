import axios from 'axios'
import {base64ToString, getItem} from '../../utilities/authUtils'

const url = process.env.REACT_APP_API_URL
const apiInstance = axios.create({
  baseURL: url,
  crossDomain: false,
})
apiInstance.interceptors.request.use((config) => {
  const token = getItem('token')
  //org id needs to be stored in localStorage for axios configuration
  const orgID = base64ToString(getItem('orgId'))
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  config.headers.orgId = orgID || ''
  return config
})

export default apiInstance
