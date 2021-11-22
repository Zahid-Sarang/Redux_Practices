import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/CounterSlice'
import themeReducer from '../features/them/themSlice'


export const store = configureStore({
    reducer : {
        counter : counterReducer,
        theme: themeReducer,
    },
})