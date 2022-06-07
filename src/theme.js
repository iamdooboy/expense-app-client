import { createTheme } from '@mui/material/styles';

const COLORS = {
    LIGHT_BACKGROUND_COLOR: '#fff',
    DARK_BACKGROUND_COLOR: '#1A202C',
    LIGHT_ERROR: 'rgb(235, 87, 87)',
    LIGHT_SUCCESS: 'rgb(52, 199, 123)',
    DARK_ERROR: '#F94E9B',
    DARK_SUCCESS: '#3AE980',
    THEME_COLOR: '#81E6D9',
    BLACK: '#000',
    WHITE: '#fff',
};
const LIGHT_DESIGN = {
    boxShadow: '4px 4px',
    border: `1px solid ${COLORS.BLACK}`,
    borderRadius: '0',
};
const DARK_DESIGN = {
    boxShadow: '4px 4px',
    border: `1px solid ${COLORS.THEME_COLOR}`,
    borderRadius: '0',
};
const TRANSITION_ANIMATION = {
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in',
    transitionDuration: '.2s',
};
const HOVER_ANIMATION = {
    transform: 'translateY(4px) translateX(4px)',
    boxShadow: '0px 0px',
};

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
                    ...DARK_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'height': '40px',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                        backgroundColor: COLORS.THEME_COLOR,
                        color: COLORS.BLACK,
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: `1px solid ${COLORS.DARK_ERROR}`,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    ...DARK_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    ...DARK_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'backgroundColor': COLORS.BLACK,
                    'color': COLORS.THEME_COLOR,
                    'height': '60px',
                    'margin': '10px 0 10px',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                        'backgroundColor': COLORS.THEME_COLOR,
                        'color': COLORS.BLACK,
                        '& svg': {
                            fill: COLORS.BLACK,
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: COLORS.THEME_COLOR,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: COLORS.THEME_COLOR,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: COLORS.THEME_COLOR,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    ...TRANSITION_ANIMATION,
                    'marginTop': '10px',
                    'marginBottom': '10px',
                    '&:hover': {
                        ...HOVER_ANIMATION,
                    },
                    '&:focus-within': {
                        ...HOVER_ANIMATION,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        'height': '50px',
                        '& fieldset': {
                            ...DARK_DESIGN,
                            ...TRANSITION_ANIMATION,
                            left: '10px',
                            right: '10px',
                        },
                        '&:hover fieldset': {
                            boxShadow: '0px 0px',
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '0.15rem',
                            boxShadow: '0px 0px',
                        },
                        '& .MuiInputAdornment-root': {
                            '& .MuiButtonBase-root': {
                                '&.MuiIconButton-root': {
                                    marginRight: '0px',
                                },
                            },
                        },
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&.MuiOutlinedInput-input': {
                        marginRight: '10px',
                        marginLeft: '10px',
                        padding: '10px',
                    },
                },
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: COLORS.THEME_COLOR,
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
                    ...LIGHT_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'height': '40px',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                        backgroundColor: COLORS.BLACK,
                        color: COLORS.WHITE,
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: `1px solid ${COLORS.LIGHT_ERROR}`,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    ...LIGHT_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    ...LIGHT_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'backgroundColor': COLORS.WHITE,
                    'color': COLORS.BLACK,
                    'height': '60px',
                    'margin': '10px 0 10px',
                    '&: hover': {
                        ...HOVER_ANIMATION,
                        'backgroundColor': COLORS.BLACK,
                        'color': COLORS.WHITE,
                        '& svg': {
                            fill: COLORS.WHITE,
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: COLORS.BLACK,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: COLORS.BLACK,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: COLORS.BLACK,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    ...TRANSITION_ANIMATION,
                    'marginTop': '10px',
                    'marginBottom': '10px',
                    '&:hover': {
                        ...HOVER_ANIMATION,
                    },
                    '&:focus-within': {
                        ...HOVER_ANIMATION,
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        'height': '50px',
                        '& fieldset': {
                            ...LIGHT_DESIGN,
                            ...TRANSITION_ANIMATION,
                            left: '10px',
                            right: '10px',
                        },
                        '&:hover fieldset': {
                            boxShadow: '0px 0px',
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '0.15rem',
                            boxShadow: '0px 0px',
                        },
                        '& .MuiInputAdornment-root': {
                            '& .MuiButtonBase-root': {
                                '&.MuiIconButton-root': {
                                    marginRight: '0px',
                                },
                            },
                        },
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&.MuiOutlinedInput-input': {
                        marginRight: '10px',
                        marginLeft: '10px',
                        padding: '10px',
                    },
                },
            },
        },
    },
    palette: {
        type: 'light',
        primary: {
            main: COLORS.BLACK,
        },
        secondary: {
            main: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        },
        background: {
            //paper: '#000',
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
