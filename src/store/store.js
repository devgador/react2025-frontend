import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        productr: productReducer,
    },
})

export default store;