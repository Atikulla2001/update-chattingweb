import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : 0,
    },
    reducers: {
        userlogininformation: (state, action) => {
            state.value = action.payload
            console.log()
        },
    },
})


export const { userlogininformation } = userSlice.actions

export default userSlice.reducer