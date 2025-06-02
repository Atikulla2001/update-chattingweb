import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../firebase.config';



const initialState = {
    value: auth,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userlogininformation: (state, action) => {
            state.value = action.payload
            console.log()
        },
    },
})


export const { userlogininformation } = userSlice.actions

export default userSlice.reducer

//  name: 'user',
//     initialState: {
//         value: 0,

//     },