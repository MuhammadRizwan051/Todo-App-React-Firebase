import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginReducer'


const store = configureStore({
    reducer: {
        loginReducer: loginSlice
    }
})

export default store