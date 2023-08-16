/* eslint-disable functional/immutable-data */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINTS } from '../../constants/api.constant'
import { IFinishingMaterialsData, IFetchsuppliersData, PogressStatusType } from '../../constants/interfaces.constant'
import API from '../../services/ajax.service'

interface IFinishingMaterialsState {
  FinishingMaterialsData: IFinishingMaterialsData | null
  suppliersData: IFetchsuppliersData | null
  changes: IFinishingMaterialsData | null
  loading: boolean
  error: string | null
  pogressStatusData: PogressStatusType | null
}

const initialState: IFinishingMaterialsState = {
  pogressStatusData: null,
  FinishingMaterialsData: null,
  suppliersData: null,
  changes: null,
  loading: false,
  error: null
}

export const fetchPogressStatus = createAsyncThunk(
  'myApartment/fetchPogressStatus',
  (contractId: string, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.GET_STATUS, { contractId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const fetchsuppliersData = createAsyncThunk(
  'finishingMaterials/fetchsuppliersData',
  (contractId: string, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.SUPPLIERS, { contractId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const fetchFinishingMaterials = createAsyncThunk(
  'finishingMaterials/fetchData',
  (contractId: string, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.FINISHING_MATERIALS, { contractId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const finishingMaterialsSlice = createSlice({
  name: 'finishingMaterials',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPogressStatus.fulfilled, (state, { payload }) => {
      state.loading = false
      state.pogressStatusData = payload
    })

    builder.addCase(fetchPogressStatus.rejected, (state, { error }) => {
      state.loading = false
      state.pogressStatusData = null
      console.log({ error })
      state.error = ''
    })
    builder.addCase(fetchPogressStatus.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchsuppliersData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.suppliersData = payload
    })

    builder.addCase(fetchsuppliersData.rejected, (state, { error }) => {
      state.loading = false
      state.suppliersData = null
      console.log({ error })
      state.error = ''
    })
    builder.addCase(fetchsuppliersData.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchFinishingMaterials.fulfilled, (state, { payload }) => {
      state.loading = false
      state.FinishingMaterialsData = payload
      state.changes = payload
    })
    builder.addCase(fetchFinishingMaterials.rejected, (state, { error }) => {
      state.loading = false
      state.FinishingMaterialsData = null
      console.log({ error })
      state.error = error.message
    })
    builder.addCase(fetchFinishingMaterials.pending, (state) => {
      state.loading = true
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = paymentSlice.actions

export default finishingMaterialsSlice.reducer
