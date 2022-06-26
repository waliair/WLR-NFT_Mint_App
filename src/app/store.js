import { configureStore } from '@reduxjs/toolkit'
import walletReducer from '../features/wallet/walletSlice'

const preState = {
  app: {
    address: null,
    balance: 0,
    c_address: "0x3266c891843494D02f94B574419C9e391B95f754",
  }
}

export const store = configureStore({
  reducer: {
    app: walletReducer
  },
  preloadedState: preState
})