import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IModalConfig {
  title?: string
}

interface IUiState {
  isModalOpen: boolean
  modalConfig?: IModalConfig
  isNavBarOpen: boolean
}

const initialState: IUiState = {
  isModalOpen: false,
  isNavBarOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<IModalConfig>) => {
      state.isModalOpen = !state.isModalOpen
      state.modalConfig = action?.payload
    },
    toggleNavBar: (state) => {
      state.isNavBarOpen = !state.isNavBarOpen
    }
  }
})

export const { toggleModal, toggleNavBar } = uiSlice.actions

export default uiSlice.reducer
