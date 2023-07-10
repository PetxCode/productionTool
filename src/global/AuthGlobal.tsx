import { createSlice } from '@reduxjs/toolkit'


interface iData {
    _id?: string;
    email?: string;
    password?: string;
    userName?: string;
    avatar?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: string;
}

interface iDataI {
    _id?: string
}

const initialState = {
    user: null || {} as iDataI,
    toggle: false
}

const AuthGlobal = createSlice({
    name: "authState",
    initialState,
    reducers: {
        createUser: (state: any, { payload }: any) => {
            state.user = payload
        },

        logOut: (state: any) => {
            state.user = null
        },

        changeToggleTrue: (state: any) => {
            state.toggle = true
        },
        changeToggleFalse: (state: any) => {
            state.toggle = false
        }
    }
});

export const { createUser, logOut, changeToggleTrue, changeToggleFalse } = AuthGlobal.actions

export default AuthGlobal.reducer