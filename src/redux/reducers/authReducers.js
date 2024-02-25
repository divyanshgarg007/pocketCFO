import * as actionTypes from '../actions/actionsTypes'

const INITIAL_STATE = {
  authLogin: {
    data: null,
    loading: false,
    error: null,
  },
  authSignUp: {
    data: null,
    loading: false,
    error: null,
  },
  authSignUpEmail: {
    data: null,
    loading: false,
    error: null,
  },
  authVerifyEmail: {
    data: null,
    loading: false,
    error: null,
  },
  googleLoginAuth: {
    data: null,
    loading: false,
    error: null,
  },
  authVerifyInviteUser: {
    data: null,
    loading: false,
    error: null,
  },
  authSignupInviteUser: {
    data: null,
    loading: false,
    error: null,
  },
}

const authReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        authLogin: {
          ...state.authLogin,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        authSignUp: {
          ...state.authSignUp,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        authSignUp: {
          ...state.authSignUp,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        authSignUp: {
          ...state.authSignUp,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.SIGNUP_EMAIL_REQUEST:
      return {
        ...state,
        authSignUpEmail: {
          ...state.authSignUpEmail,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.SIGNUP_EMAIL_SUCCESS:
      return {
        ...state,
        authSignUpEmail: {
          ...state.authSignUpEmail,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.SIGNUP_EMAIL_FAILURE:
      return {
        ...state,
        authSignUpEmail: {
          ...state.authSignUpEmail,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        authVerifyEmail: {
          ...state.authVerifyEmail,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        authVerifyEmail: {
          ...state.authVerifyEmail,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        authVerifyEmail: {
          ...state.authVerifyEmail,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.GOOGLE_LOGIN_AUTH_REQUEST:
      return {
        ...state,
        googleLoginAuth: {
          ...state.googleLoginAuth,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.GOOGLE_LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        googleLoginAuth: {
          ...state.googleLoginAuth,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.GOOGLE_LOGIN_AUTH_FAILURE:
      return {
        ...state,
        googleLoginAuth: {
          ...state.googleLoginAuth,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.VERIFY_INVITE_USER_REQUEST:
      return {
        ...state,
        authVerifyInviteUser: {
          ...state.authVerifyInviteUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.VERIFY_INVITE_USER_SUCCESS:
      return {
        ...state,
        authVerifyInviteUser: {
          ...state.authVerifyInviteUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.VERIFY_INVITE_USER_FAILURE:
      return {
        ...state,
        authVerifyInviteUser: {
          ...state.authVerifyInviteUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    case actionTypes.SIGNUP_INVITE_USER_REQUEST:
      return {
        ...state,
        authSignupInviteUser: {
          ...state.authSignupInviteUser,
          data: null,
          loading: true,
          error: null,
        },
      }
    case actionTypes.SIGNUP_INVITE_USER_SUCCESS:
      return {
        ...state,
        authSignupInviteUser: {
          ...state.authSignupInviteUser,
          data: action.payload,
          loading: false,
          error: null,
        },
      }
    case actionTypes.SIGNUP_INVITE_USER_FAILURE:
      return {
        ...state,
        authSignupInviteUser: {
          ...state.authSignupInviteUser,
          data: null,
          loading: false,
          error: action.payload,
        },
      }
    default:
      return state
  }
}

export default authReducers
