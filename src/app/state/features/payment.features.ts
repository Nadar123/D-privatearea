/* eslint-disable functional/immutable-data */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINTS } from '../../constants/api.constant'
import {
  IPaymentData,
  INextListData,
  IGuaranteesData,
  IToolTipData,
  IBalanceData,
  IAmountPaidData,
  IQuestionData
} from '../../constants/interfaces.constant'
import API from '../../services/ajax.service'

interface IPaymentState {
  value: IFormDataState[]
  amountPaidData: IAmountPaidData | null
  balanceData: IBalanceData | null
  allQuestionsData: IQuestionData | null
  tooltipsList: IToolTipData[] | null
  guaranteesListData: IGuaranteesData | null
  paymentsInfoData: IPaymentData | null
  nextListPaymentData: INextListData | null
  loading: boolean
  error: string | undefined
}

export interface IFormDataState {
  value?: string[]
}
const initialState: IPaymentState = {
  value: [],
  allQuestionsData: null,
  amountPaidData: null,
  balanceData: null,
  tooltipsList: null,
  guaranteesListData: null,
  nextListPaymentData: null,
  paymentsInfoData: null,
  loading: false,
  error: undefined
}
export const getAmountPaid = createAsyncThunk('payments/getAmountPaid', (contractId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.AMOUNTPAID, { contractId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const getBalance = createAsyncThunk('payments/getBalance', (contractId: string, { rejectWithValue }) =>
  API.getInstance()
    .get(API_ENDPOINTS.BALANCE_LIST, { contractId })
    .then((response) => response.data)
    .catch((err) => rejectWithValue(err))
)

export const getGuaranteesList = createAsyncThunk(
  'payments/fetchGuaranteesList',
  (contractId: string, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.GET_GUARANTEES, { contractId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const getPaymentScheduleData = createAsyncThunk(
  'payments/fetchDataNextList',
  (contractId: string, { rejectWithValue }) =>
    API.getInstance()
      .get(API_ENDPOINTS.GET_PAYMENT_SCHEDULE, { contractId })
      .then((response) => response.data)
      .catch((err) => rejectWithValue(err))
)

export const fetchPaymentData = createAsyncThunk(
  'payments/fetchData',
  async (contractId: string, { rejectWithValue }) => {
    try {
      const [paymentsResponse, tooltipsResponse] = await Promise.all([
        API.getInstance().get(API_ENDPOINTS.GET_PAYMENT_OVERVIEW, { contractId }),
        API.getInstance().get(API_ENDPOINTS.TOOL_TIP_ALL)
      ])

      return {
        paymentsData: paymentsResponse.data,
        tooltipsList: tooltipsResponse.data.tooltipsList
      }
    } catch (err) {
      rejectWithValue(err)
    }
  }
)

export const paymentSlice = createSlice({
  name: 'payments',
  initialState: initialState,
  reducers: {
    addChatText: (state, action: any) => {
      // { title, text, owner }, timestamp=Date.now()
      state.value.push({ ...action.payload, timestamp: Date.now() })
    },
    updateChatText: (state, action: any) => {
      return state.value.map((message, idx) => {
        if (idx !== action.payload.index) {
          return message
        }
        return {
          ...message,
          text: action.payload.text
        }
      })
    },
    loadChatTexts: (state, action) => {
      state.value = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getBalance.fulfilled, (state, { payload }) => {
      state.loading = false
      state.balanceData = payload
      state.error = ''
    })
    builder.addCase(getBalance.rejected, (state, { error }) => {
      state.loading = false
      state.balanceData = null
      console.log({ error })
      state.error = error.message
    })
    builder.addCase(getBalance.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAmountPaid.fulfilled, (state, { payload }) => {
      state.loading = false
      state.amountPaidData = payload
      state.error = ''
    })
    builder.addCase(getAmountPaid.rejected, (state, { error }) => {
      state.loading = false
      state.amountPaidData = null
      console.log({ error })
      state.error = error.message
    })
    builder.addCase(getAmountPaid.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getGuaranteesList.fulfilled, (state, { payload }) => {
      state.loading = false
      state.guaranteesListData = payload
      state.error = ''
    })
    builder.addCase(getGuaranteesList.rejected, (state, { error }) => {
      state.loading = false
      state.guaranteesListData = null
      console.log({ error })
      state.error = error.message
    })
    builder.addCase(getGuaranteesList.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPaymentData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.paymentsInfoData = payload?.paymentsData
      state.tooltipsList = payload?.tooltipsList
      state.error = ''
    })
    builder.addCase(fetchPaymentData.rejected, (state, { error }) => {
      state.loading = false
      state.paymentsInfoData = null
      console.log({ error })
      state.error = error.message
    })
    builder.addCase(fetchPaymentData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPaymentScheduleData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPaymentScheduleData.fulfilled, (state, { payload }) => {
      state.loading = false
      state.nextListPaymentData = payload
      state.error = ''
    })
    builder.addCase(getPaymentScheduleData.rejected, (state, { error }) => {
      state.loading = false
      state.nextListPaymentData = null
      console.log({ error })
      state.error = error.message
    })
  }
})
// Action creators are generated for each case reducer function
export const { addChatText, loadChatTexts, updateChatText } = paymentSlice.actions

export default paymentSlice.reducer
