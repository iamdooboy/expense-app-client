import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
    },
    success: {
        main: '#3ae980',
    },
    error: {
        main: '#f94e9b',
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
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#BB86FC',
                },
            },
        },
        MuiTableRow: {
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
        success: {
            main: '#3ae980',
        },
        error: {
            main: '#f94e9b',
        },
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
        success: {
            main: 'rgb(52, 199, 123)',
        },
        error: {
            main: 'rgb(235, 87, 87)',
        },
    },
});

export { darkTheme, lightTheme };
