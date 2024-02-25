/* eslint-disable no-unused-vars */
import React, {Suspense, lazy} from 'react'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import AppLayout from '../../config/default/default'
import {Loader} from '../../components'
import {getItem} from '../../utilities/authUtils'

const Login = lazy(() => import('../../views/Login'))
const Signup = lazy(() => import('../../views/Signup'))
const Register = lazy(() => import('../../views/Register'))
const EmailVerification = lazy(() => import('../../views/EmailVerification'))
const ForgetPassword = lazy(() => import('../../views/ForgetPassword'))
const VerifyInviteUser = lazy(() => import('../../views/VerifyInviteUser'))
const Settings = lazy(() => import('../../views/Settings'))
const Organization = lazy(() => import('../../views/Settings/components/Organization'))
const ChartOfAccounts = lazy(() => import('../../views/Settings/components/AccountCharts'))
const VatCodes = lazy(() => import('../../views/Settings/components/VatCodes'))
const Users = lazy(() => import('../../views/Settings/components/Users'))
const BudgetSettings = lazy(() => import('../../views/Settings/components/BudgetSettings'))
const Integrations = lazy(() => import('../../views/Settings/components/Integrations'))
const Profile = lazy(() => import('../../views/Profile'))
const MyProfile = lazy(() => import('../../views/Profile/components/MyProfile'))
const Budgets = lazy(() => import('../../views/Budgets/BudgetsListing'))
const EditBudget = lazy(() => import('../../views/Budgets/EditBudget'))
const Salaries = lazy(() => import('../../views/Salaries/SalariesListing'))
const EditSalaries = lazy(() => import('../../views/Salaries/EditSalaries'))
const ViewIntegrations = lazy(() => import('../../views/Settings/components/ViewIntegrations'))
const Overview = lazy(() => import('../../views/Overview/overview'))
const AddOrganization = lazy(() => import('../../views/AddOrganization/addOrganization'))

const AppRoutes = () => {

  const PrivateRoute = ({route}) => {
    const isSignedIn = getItem('token')
    if (!isSignedIn) {
      return <Navigate to={route} />
    }
    return <Outlet />
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={routesNames.LOGIN} />} />
      <Route path={routesNames.LOGIN} element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
      <Route path={routesNames.SIGNUP} element={<Suspense fallback={<Loader />}><Signup /></Suspense>} />
      <Route path={routesNames.REGISTER} element={<Suspense fallback={<Loader />}><Register /></Suspense>} />
      <Route path={routesNames.EMAILVERIFICATION} element={<Suspense fallback={<Loader />}><EmailVerification /></Suspense>} />
      <Route path={routesNames.FORGETPASSWORD} element={<Suspense fallback={<Loader />}><ForgetPassword /></Suspense>} />
      <Route path={routesNames.VERIFYINVITEUSER} element={<Suspense fallback={<Loader />}><VerifyInviteUser /></Suspense>} />
      <Route element={<PrivateRoute route={routesNames.LOGIN} />}>
        <Route path={routesNames.OVERVIEW} element={<Suspense fallback={<Loader />}><AppLayout><Overview /></AppLayout></Suspense>} />
        <Route path={routesNames.SETTINGS} element={<Suspense fallback={<Loader />}><AppLayout><Settings><Organization /></Settings></AppLayout></Suspense>} />
        <Route path={routesNames.CHARTSOFACCOUNTS} element={<Suspense fallback={<Loader />}><AppLayout><Settings><ChartOfAccounts /></Settings></AppLayout></Suspense>} />
        <Route path={routesNames.VATCODES} element={<Suspense fallback={<Loader />}><AppLayout><Settings><VatCodes /></Settings></AppLayout></Suspense>} />
        <Route path={routesNames.USERS} element={<Suspense fallback={<Loader />}><AppLayout><Settings><Users /></Settings></AppLayout></Suspense>} />
        <Route path={routesNames.BUDGETSETTINGS} element={<Suspense fallback={<Loader />}><AppLayout><Settings><BudgetSettings /></Settings></AppLayout></Suspense>} />
        <Route path={routesNames.INTEGRATIONS} element={<Suspense fallback={<Loader />}><AppLayout><Settings><Integrations /></Settings></AppLayout></Suspense>} />

        <Route path={routesNames.PROFILE} element={<Suspense fallback={<Loader />}><AppLayout><Profile><MyProfile /></Profile></AppLayout></Suspense>} />

        <Route path={routesNames.BUDGETS} element={<Suspense fallback={<Loader />}><AppLayout><Budgets /></AppLayout></Suspense>} />
        <Route path={routesNames.EDITBUDGETS} element={<Suspense fallback={<Loader />}><AppLayout><EditBudget /></AppLayout></Suspense>} />
        <Route path={routesNames.SALARIES} element={<Suspense fallback={<Loader />}><AppLayout><Salaries /></AppLayout></Suspense>} />
        <Route path={routesNames.EDITSALARIES} element={<Suspense fallback={<Loader />}><AppLayout><EditSalaries /></AppLayout></Suspense>} />
        <Route path={routesNames.VIEWINTEGRATION} element={<Suspense fallback={<Loader />}><AppLayout><ViewIntegrations /></AppLayout></Suspense>} />
        <Route path={routesNames.ADDORGANIZATION} element={<Suspense fallback={<Loader />}><AppLayout><AddOrganization /></AppLayout></Suspense>} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
