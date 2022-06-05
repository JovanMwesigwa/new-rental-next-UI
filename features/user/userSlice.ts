import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userState {
    loading: boolean;
    user:  any;
    error: string;
}

// Define the initial state using that type
const initialState: userState = {
    loading: false,
    user: null,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchingUserRequest: (state) => {
            state.loading = true;
            state.error = '';
        },
        fetchingUserSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        },
        fetchingUserFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    },
})

export const { fetchingUserRequest, fetchingUserSuccess, fetchingUserFailure, removeUser } = userSlice.actions

export default userSlice.reducer
