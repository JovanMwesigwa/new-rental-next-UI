
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface editingPropertyState {
    property: any;
}

const initialState: editingPropertyState = {
    property: {}
}

export const editingPropertySlice = createSlice({
    name: 'editingProperty',
    initialState,
    reducers: {
        setProperty: (state, action: PayloadAction<any>) => {
            state.property = action.payload
        },
        removeProperty: (state) => {
            state.property = []
        }
    },
})

export const { setProperty, removeProperty } = editingPropertySlice.actions

export default editingPropertySlice.reducer;