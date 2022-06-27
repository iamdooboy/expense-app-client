import { createSlice } from '@reduxjs/toolkit';

const disableSlice = createSlice({
    name: 'disableTransaction',
    initialState: {
        disableMode: false,
    },
    reducers: {
        changeDisableMode: (state, action) => {
            console.log('changing disable mode');
            return (state = action.payload);
        },
    },
});

export const { changeDisableMode } = disableSlice.actions;

export default disableSlice.reducer;
