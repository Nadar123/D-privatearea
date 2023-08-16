/* eslint-disable functional/immutable-data */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINTS } from '../../constants/api.constant'
import { IContractData } from '../../constants/interfaces.constant'
import API from '../../services/ajax.service'

interface IContractState {
  contractInfoData: IContractData | null
  loading: boolean
  error: string | undefined
}

const initialState: IContractState = {
  contractInfoData: null,
  loading: false,
  error: undefined
}

export const fetchContractData = createAsyncThunk('contract/fetchData', (contractId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.CONTRACT_OVERVIEW, { contractId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const contractSlice = createSlice({
  name: 'contract',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContractData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.contractInfoData = payload
      // state.error = ''
    })
    builder.addCase(fetchContractData.rejected, (state, { error }) => {
      state.loading = false
      state.contractInfoData = null
      console.log({ error })
      //   state.error = error.message;
    })
    builder.addCase(fetchContractData.pending, (state) => {
      state.loading = true
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = paymentSlice.actions

export default contractSlice.reducer
