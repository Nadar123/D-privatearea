import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/ajax.service'
import { API_ENDPOINTS } from '../../constants/api.constant'
export interface IChatState {
  messages: []
  callID: number | null
  text: string | null
  statusID: any
}
const initialState = {
  messages: [],
  callID: null,
  text: null,
  statusID: null
}
export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: any) => {
      const { message } = action.payload
      state.messages.push(message)
    },
    setMessages: (state, action) => {
      state.messages = action.payload.messages
    },
    setCallID: (state, action) => {
      const { callID } = action.payload
      state.callID = callID
    },
    setStatusID: (state, action) => {
      const { statusID } = action.payload
      state.statusID = statusID
    },
    updateMessageText: (state, action) => {
      const { index, newText } = action.payload
      state.messages[index].text = newText
    }
  }
})

export const { setStatusID, updateMessageText, setMessages, setCallID, addMessage } = chatSlice.actions

export default chatSlice.reducer
