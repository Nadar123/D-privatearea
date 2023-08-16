import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/ajax.service'
import { API_ENDPOINTS, ERROR_CODE } from '../../constants/api.constant'
import { IQuestionData } from '../../constants/interfaces.constant'

export interface IUser {
  info: any
  id: number
  name: string
  contractId: string | any
  username: string
  email: string
  role: string
  personalInfo: {
    phoneNumber: string
  }
  addressData: {
    city: string
    street: string
    toSend: boolean
  }
  billing: {
    toSend: boolean
  }
  contactList: []
  allQuestionsData: IQuestionData
}
export interface IVerification {
  success: boolean
  verification: string | null
}
export interface IUserError {
  error: boolean
  errorCode: number | null
  errorMessage: string
}
export interface IUserState {
  timestamp: any
  questionData: IQuestionData | null
  allQuestionsData: [] | any
  personalInfo: any
  isAuth: boolean
  contractId: string
  projectId: number | any
  verification: any
  user: IUser | null
  loading: boolean
  error: IUserError
  otpValidated: boolean
  isPasseordChanged: boolean
}
export interface ICredentials {
  email: string
  password: string
}
export interface IOtpArgs {
  verification: any
  otp: string | undefined
  contractId: string | null | undefined
}
export interface IPassword {
  password: string
}

export const getQuestion = createAsyncThunk('payments/getQuestion', (projectId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.GET_QUESTION, { projectId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const getAllQuestions = createAsyncThunk(
  'user/getAllQuestions',
  ({ contractId, projectId }: Record<string, string | number>, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.GET_ALL_QUESTIONS, { contractId, projectId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const getProfileData = createAsyncThunk('user/getProfileData', (otpArgs: IOtpArgs, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.PROFILE_DATA, otpArgs)
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const signupWithPassword = createAsyncThunk(
  '/user/signupWithPassword',
  (credentials: IPassword, { rejectWithValue }) =>
    API.getInstance()
      .put(API_ENDPOINTS.SET_PASSWORD, credentials)
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const login = createAsyncThunk('user/login', (credentials: ICredentials, { rejectWithValue }) =>
  API.getInstance()
    .post(API_ENDPOINTS.LOGIN, credentials)
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const isEmail = (email: string) => email?.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

export const generateOtp = createAsyncThunk(
  'user/generateOtp',
  (identifire: string | undefined | any, { rejectWithValue }) => {
    const requestArgs = {}
    if (isEmail(identifire)) {
      requestArgs.email = identifire
    } else {
      requestArgs.phoneNumber = identifire
    }
    return API.getInstance()
      .post(API_ENDPOINTS.GENERRATE_OTP, requestArgs)
      .then(({ data }) => data.verification)
      .catch((err) => rejectWithValue(err))
  }
)

export const validateOtp = createAsyncThunk('user/validateOtp', (otpArgs: IOtpArgs, { rejectWithValue }) =>
  API.getInstance()
    .post(API_ENDPOINTS.VALIDATE_OTP, otpArgs)
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const getSilentLogin = createAsyncThunk('user/getSilentLogin', (otpArgs: IOtpArgs, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.SILENT_LOGIN, otpArgs)
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  (credentials: Partial<ICredentials>, { rejectWithValue }) =>
    API.getInstance()
      .post(API_ENDPOINTS.FORGOT_PASSWORD, credentials)
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

const initialState: IUserState = {
  questionData: null,
  allQuestionsData: null,
  isAuth: false,
  verification: {},
  personalInfo: null,
  user: null,
  otpValidated: false,
  isPasseordChanged: false,
  loading: false,
  error: {
    error: false,
    errorCode: null,
    errorMessage: ''
  },
  contractId: '',
  projectId: '',
  timestamp: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserUnauthorized: (state) => {
      state.error.errorCode = ERROR_CODE.unauthorized
    },
    updateClientAndProjectIDs: (state, action) => {
      if (state.user) {
        const { contractId, projectId } = action.payload
        state.contractId = contractId
        state.projectId = projectId
        localStorage.setItem('contractId', state.contractId)
        localStorage.setItem('projectId', state.projectId)
      }
    },
    logout: (state) => {
      state.user = null
      state.isAuth = false
      localStorage.removeItem('userToken')
      localStorage.removeItem('contractId')
      localStorage.removeItem('projectId')
    },
    setTimeStamp: (state, action) => {
      state.timestamp = action.payload
    }
  },
  extraReducers: {
    [getQuestion.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [getQuestion.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.questionData = payload.reduce((acc: any, item: any) => {
        const catId = acc.findIndex(({ text }: any) => text === item.sugDescription)

        if (catId !== -1) {
          const { subDescription, ...rest } = item
          acc[catId].items.push({ text: subDescription, ...rest })
          return acc
        }

        acc.push({
          id: item.sugCode,
          empCode: item.empCode,
          subCode: item.subCode,
          subDescription: item.subDescription,
          text: item.sugDescription,
          items: []
        })
        return acc
      }, [])
      state.error.error = false
    },
    [getQuestion.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },

    [getAllQuestions.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [getAllQuestions.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.allQuestionsData = payload.services?.map((service: any) => ({
        ...service,
        ActivityCalls: service.ActivityCalls.map(({ statusID, Notes, Details, CntctDate, owner }: any) => ({
          title: Details,
          text: Notes,
          statusID: statusID,
          owner: owner === 0 ? 'user' : 'chat',
          timestamp: new Date(CntctDate).getTime()
        }))
      }))
      state.isAuth = true
    },

    [getAllQuestions.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },

    [getProfileData.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [getProfileData.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.personalInfo = payload
      state.isAuth = true
    },
    [getProfileData.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },

    [login.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [login.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.user = payload?.info?.data
      state.isAuth = true
      localStorage.setItem('userToken', payload.info.token)
      localStorage.setItem('contractId', state.user?.contractId)
      localStorage.setItem('projectId', state.projectId)
    },
    [login.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },
    [signupWithPassword.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [signupWithPassword.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.isPasseordChanged = true
      state.isAuth = true
    },
    [signupWithPassword.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },
    [getSilentLogin.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [getSilentLogin.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.user = payload
      state.isAuth = true
      if (!state.contractId || !state.projectId) {
        state.contractId = payload.info.data[0].contractId
        state.projectId = payload.info.data[0].projectId
      }
      localStorage.setItem('userToken', payload.info.token)
      localStorage.setItem('contractId', state.contractId)
      localStorage.setItem('projectId', state.projectId)
    },
    [getSilentLogin.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
      state.isAuth = false
    },
    [generateOtp.pending.type]: (state) => {
      state.loading = true
    },
    [generateOtp.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.verification = payload
      state.error.error = false
    },
    [generateOtp.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
    },
    [validateOtp.pending.type]: (state) => {
      state.loading = true
    },
    [validateOtp.fulfilled.type]: (state, { payload }) => {
      state.loading = false
      state.contractId = payload.info.data[0].contractId
      state.user = payload
      state.isAuth = true
      state.error.error = false
      state.otpValidated = true
      localStorage.setItem('userToken', payload.info.token)
      localStorage.setItem('contractId', state.contractId)
      localStorage.setItem('projectId', state.projectId)
    },
    [validateOtp.rejected.type]: (state) => {
      state.loading = false
      state.isAuth = false
      state.error.error = true
    },
    [forgotPassword.pending.type]: (state) => {
      state.loading = true
      state.error.error = false
    },
    [forgotPassword.fulfilled.type]: (state, { payload }) => {
      state.loading = false
    },
    [forgotPassword.rejected.type]: (state) => {
      state.loading = false
      state.error.error = true
    }
  }
})

export const { setTimeStamp, setUserUnauthorized, logout, updateClientAndProjectIDs } = userSlice.actions

export default userSlice.reducer
