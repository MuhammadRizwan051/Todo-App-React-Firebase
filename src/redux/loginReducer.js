import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'loginReducer',
    initialState: {
        userName: 'Rizwan',
        email: 'rizwan@gmail.com',
        password: '123456'
    },
    reducers: {
        add(state, action) { },
        edit(state, action) {
            console.log(action.payload)
            state.email = action.payload.email
            state.password = action.payload.password
        },
        del(state, action) { },
    }
})
export const { edit } = loginSlice.actions
export default loginSlice.reducer