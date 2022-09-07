import { createSlice } from '@reduxjs/toolkit';

const disableSlice = createSlice({
    name: 'disableBudget',
    initialState: {
        disableMode: false,
    },
    reducers: {
        changeDisableMode: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { changeDisableMode } = disableSlice.actions;

export default disableSlice.reducer;
