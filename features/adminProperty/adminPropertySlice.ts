import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface adminPropertyState {
    loading: boolean;
    adminProperty: any;
    error: string;
}

const initialState: adminPropertyState = {
    loading: false,
    adminProperty: null,
    error: '',
}

export const adminPropertySlice = createSlice({
    name: 'adminProperty',
    initialState,
    reducers: {
        fetchingAdminPropertyRequest: (state) => {
            state.loading = true;
            state.error = '';
        },
        fetchingAdminPropertySuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.adminProperty = action.payload;
            state.error = '';
        },
        fetchingAdminPropertyFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { fetchingAdminPropertyRequest, fetchingAdminPropertySuccess, fetchingAdminPropertyFailure } = adminPropertySlice.actions

export default adminPropertySlice.reducer