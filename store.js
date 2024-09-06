import { configureStore } from '@reduxjs/toolkit'
import appReducer from './src/slices/appSlice'

export default configureStore({
  reducer: {app: appReducer}
})