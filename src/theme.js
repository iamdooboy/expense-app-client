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
        MuiButton: {
            styleOverrides: {
                root: {
                    'fontWeight': 'bold',
                    'border': '1px solid',
                    'boxShadow': '4px 4px',
                    'borderRadius': '0',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transactionDuration': '.2s',
                    '&: hover': {
                        backgroundColor: '#81E6D9',
                        transform: 'translateY(4px) translateX(4px)',
                        boxShadow: '0px 0px',
                        color: '#000',
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: '1px solid #f94e9b',
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    'border': '1px solid',
                    'boxShadow': '4px 4px',
                    'borderRadius': '0',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transitionDuration': '.1s',
                    '&: hover': {
                        backgroundColor: '#81E6D9',
                        transform: 'translateY(4px) translateX(4px)',
                        boxShadow: '0px 0px',
                        color: '#000',
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    'height': '60px',
                    'boxShadow': '4px 4px',
                    'border': '1px solid',
                    'margin': '10px 0 10px',
                    'color': '#81E6D9',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transitionDuration': '.2s',
                    '&: hover': {
                        'backgroundColor': '#81E6D9',
                        'transform': 'translateY(4px) translateX(4px)',
                        'boxShadow': '0px 0px',
                        'color': '#000',
                        '& svg': {
                            fill: '#000',
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#81E6D9',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#81E6D9',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: '#81E6D9',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    'color': 'red',
                    '&: active': {
                        color: 'red',
                    },
                },
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#81E6D9',
        },
        secondary: {
            main: '#fafafa',
        },
        text: {
            primary: '#81E6D9',
            secondary: '#000',
        },
        background: {
            paper: '#81E6D9',
            default: '#000',
        },
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
        MuiButton: {
            styleOverrides: {
                root: {
                    'fontWeight': 'bold',
                    'border': '1px solid',
                    'boxShadow': '4px 4px',
                    'borderRadius': '0',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transitionDuration': '.1s',
                    '&: hover': {
                        backgroundColor: '#000',
                        transform: 'translateY(4px) translateX(4px)',
                        boxShadow: '0px 0px',
                        color: '#fff',
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: '1px solid rgb(235, 87, 87)',
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    'border': '1px solid',
                    'boxShadow': '4px 4px',
                    'borderRadius': '0',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transitionDuration': '.1s',
                    '&: hover': {
                        backgroundColor: '#000',
                        transform: 'translateY(4px) translateX(4px)',
                        boxShadow: '0px 0px',
                        color: '#fff',
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    'height': '60px',
                    'boxShadow': '4px 4px',
                    'border': '1px solid',
                    'margin': '10px 0 10px',
                    'color': '#000',
                    'transitionProperty': 'all',
                    'transitionTimingFunction': 'ease-in',
                    'transitionDuration': '.2s',
                    '&: hover': {
                        'backgroundColor': '#000',
                        'transform': 'translateY(4px) translateX(4px)',
                        'boxShadow': '0px 0px',
                        'color': '#fff',
                        '& svg': {
                            fill: '#fff',
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#000',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '&: focus': {
                        border: '0px',
                        borderRadius: '0px',
                    },
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
            secondary: '#fff',
        },
        background: {
            paper: '#000',
            default: '#fff',
        },
        success: {
            main: 'rgb(52, 199, 123)',
        },
        error: {
            main: 'rgb(235, 87, 87)',
        },
    },
});

export { darkTheme, lightTheme };
