import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINTS } from '../../constants/api.constant'
import { IFilesData, IToolTipData } from '../../constants/interfaces.constant'
import API from '../../services/ajax.service'
import singlePost from '../../../json/post.json'

interface IGlobalState {
  filesData: IFilesData[] | null
  tooltipsList: IToolTipData[] | null
  isAuth: boolean
  user: any
  loading: boolean
  error: string | undefined
}

export const getFilesData = createAsyncThunk('global/getFilesData', (contractId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.GET_FILES, { contractId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const GetAllTooltip = createAsyncThunk('global/getAllTooltip', (contractId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.TOOL_TIP_ALL, { contractId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

const initialState: IGlobalState = {
  filesData: null,
  tooltipsList: null,
  isAuth: false,
  user: null,
  error: undefined,
  loading: false
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // login: (state) => {
    //   state.isAuth = true
    // },
    // logout: (state) => {
    //   state.isAuth = false
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getFilesData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.filesData = payload
      state.error = ''
    })
    builder.addCase(getFilesData.rejected, (state, { error }) => {
      state.loading = false
      state.filesData = null
      console.log({ error })
    })
    builder.addCase(getFilesData.pending, (state) => {
      state.loading = true
    })

    builder.addCase(GetAllTooltip.fulfilled, (state, { payload }) => {
      state.loading = false
      state.tooltipsList = payload
      state.error = ''
    })
    builder.addCase(GetAllTooltip.rejected, (state, { error }) => {
      state.loading = false
      state.tooltipsList = null
      console.log({ error })
      //   state.error = error.message;
    })
    builder.addCase(GetAllTooltip.pending, (state) => {
      state.loading = true
    })
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = globalSlice.actions

export default globalSlice.reducer
