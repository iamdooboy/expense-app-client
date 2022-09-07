import { createSlice } from '@reduxjs/toolkit';

const theme = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme'))
    : 'light';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: theme.mode,
    },
    reducers: {
        toggleColorMode: (state, action) => {
            localStorage.setItem('theme', JSON.stringify(action.payload));
            return (state = action.payload);
        },
    },
});

export const { toggleColorMode } = themeSlice.actions;

export default themeSlice.reducer;
