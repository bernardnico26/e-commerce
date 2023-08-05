import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
		name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload
        },
    }
})

export const {  } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;