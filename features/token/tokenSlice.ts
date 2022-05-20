import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface TokenState {
  token: string | number | null
}

// Define the initial state using that type
const initialState: TokenState = {
    token: null,
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | number | null>) => {
            state.token = action.payload
        },
        removeToken: (state) => {
            state.token = null
        }
    },

})

export const { setToken, removeToken } = tokenSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default tokenSlice.reducer