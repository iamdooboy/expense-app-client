import { createSlice } from '@reduxjs/toolkit';

const editTransactionSlice = createSlice({
    name: 'editTransactionData',
    initialState: [],
    reducers: {
        updateEditTransactionData: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { updateEditTransactionData } = editTransactionSlice.actions;

export default editTransactionSlice.reducer;
