/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import './App.css'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import {getItem, setItem, toBase64} from '../../utilities/authUtils'
import Routes from './Routes'

const App = (props) => {

  const isToken = getItem('token')
  const masterState = useSelector((state) => state.masterState)

  useEffect(() => {
    if (!masterState.getMasterData.data && isToken) {
      props.actions.masterDataAction()
    }
  }, [masterState.getMasterData.data, isToken])

  // first time we are setting the org id from master data
  if (masterState?.getMasterData?.data?.responce?.user?.org_list[0]?.org_id && !getItem('orgId')) {
    setItem('orgId', toBase64(masterState?.getMasterData?.data?.responce?.user?.org_list[0]?.org_id))
  }

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(App)
