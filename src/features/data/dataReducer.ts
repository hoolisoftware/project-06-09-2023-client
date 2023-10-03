import { createSlice } from '@reduxjs/toolkit'

import type { ClinicConfig, Treatment } from '@/types'


interface dataState {
    config: ClinicConfig | undefined
    treatments: Treatment[]
}

const initialState: dataState = {
    treatments: [],
    config: undefined
}

export const dataSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setTreatments: (state, action) => {
            state.treatments = action.payload
        },
        setConfig: (state, action) => {
            state.config = action.payload
        }
    },
})

export const { setConfig, setTreatments } = dataSlice.actions

export default dataSlice.reducer