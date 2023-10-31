import { createSlice } from '@reduxjs/toolkit'

import type { ClinicConfig, Treatment } from '@/types'


interface dataState {
    config: ClinicConfig | undefined
    treatments: Treatment[]
    recaptcha: string|null
}

const initialState: dataState = {
    treatments: [],
    config: undefined,
    recaptcha: ''
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
        },
        setRecaptcha: (state, action) => {
            state.recaptcha = action.payload
        }
    },
})

export const { setConfig, setTreatments, setRecaptcha } = dataSlice.actions

export default dataSlice.reducer