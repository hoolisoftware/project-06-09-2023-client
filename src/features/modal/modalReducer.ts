import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
    modalMessage: boolean
}

const initialState: ModalState = {
    modalMessage: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModalMessage: (state) => {
            state.modalMessage = !state.modalMessage
        },
    },
})

export const { toggleModalMessage } = modalSlice.actions

export default modalSlice.reducer