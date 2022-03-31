import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
    },
});

const darkTheme = createTheme({
    ...theme,
    palette: {
        type: 'dark',
        primary: {
            main: '#17EF97',
        },
        secondary: {
            main: '#fafafa',
        },
    },
});
const lightTheme = createTheme({
    ...theme,
    palette: {
        type: 'light',
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        text: {
            primary: '#000',
        },
        background: '#fff',
    },
});

export { darkTheme, lightTheme };
