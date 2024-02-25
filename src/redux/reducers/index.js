import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import authReducers from './authReducers'
import masterReducers from './masterReducers'
import uploadReducers from './uploadReducers'
import settingReducers from './settingReducers'
import profileReducers from './profileReducers'

const appReducer = combineReducers({
  routerState: routerReducer,
  authState: authReducers,
  masterState: masterReducers,
  uploadState: uploadReducers,
  settingState: settingReducers,
  profileState: profileReducers,
})

const rootReducer = (state, action) => {
//   if (action.type === 'AUTH_LOGOUT_USER') {
//     return appReducer(undefined, action)
//   }
  return appReducer(state, action)
}

export default rootReducer
