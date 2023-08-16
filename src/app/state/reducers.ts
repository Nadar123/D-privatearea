import { combineReducers } from '@reduxjs/toolkit'

import globalReducer from './features/global.features'
import paymentReducer from './features/payment.features'
import uiRreducer from './features/ui.features'
import userReducer from './features/user.feature'
import chatReducer from './features/chat.feature'
import contractReducer from './features/contract.features'
import finishingMaterialsReducer from './features/finishingMaterials.features'

const rootReducer = combineReducers({
  global: globalReducer,
  ui: uiRreducer,
  payments: paymentReducer,
  contract: contractReducer,
  finishingMaterials: finishingMaterialsReducer,
  user: userReducer, // example with async dispatch,
  chat: chatReducer
})

export default rootReducer
