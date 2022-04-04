import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
    },
});

const darkTheme = createTheme({
    ...theme,
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#BB86FC',
                },
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#BB86FC',
        },
        secondary: {
            main: '#fafafa',
        },
        text: {
            primary: '#BB86FC',
        },
        background: '#000',
    },
});
const lightTheme = createTheme({
    ...theme,
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#000',
                },
            },
        },
    },
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
