import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    modalMessage: boolean
    modalRecaptcha: boolean
}

const initialState: ModalState = {
    modalMessage: false,
    modalRecaptcha: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModalMessage: (state) => {
            state.modalMessage = !state.modalMessage
        },
        toggleModalRecaptcha: (state) => {
            state.modalRecaptcha = !state.modalRecaptcha
        },
    },
})

export const { toggleModalMessage, toggleModalRecaptcha } = modalSlice.actions

export default modalSlice.reducer