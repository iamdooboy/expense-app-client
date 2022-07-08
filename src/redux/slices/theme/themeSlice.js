import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light',
    },
    reducers: {
        toggleColorMode: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { toggleColorMode } = themeSlice.actions;

export default themeSlice.reducer;
