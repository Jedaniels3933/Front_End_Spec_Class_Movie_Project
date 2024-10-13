import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from './features/watchListSlice'

//initialize our redux store with configureStore
export const store = configureStore({
    reducer: {
        watchList: watchListReducer
    }
})