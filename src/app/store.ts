import { configureStore } from '@reduxjs/toolkit'

import modalReducer from '../features/modal/modalReducer'
import dataReducer from '../features/data/dataReducer'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    data: dataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch