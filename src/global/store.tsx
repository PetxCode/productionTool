import { configureStore } from "@reduxjs/toolkit"
import reducer from "./AuthGlobal"

export const store = configureStore({
    reducer
})