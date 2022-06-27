import { createTheme } from '@mui/material/styles';

export const LIGHT_MODE_COLORS = {
    BACKGROUND_COLOR: '#F5F5F5',
    SECONDARY_BACKGROUND: '#FFF',
    BOX_SHADOW: '#171923',
    ERROR: 'rgb(235, 87, 87)',
    SUCCESS: 'rgb(52, 199, 123)',
    TEXT: '#171923',
    HOVER_TEXT: '#CBD5E0',
    DISABLE: '#A8A8AC',
};
export const DARK_MODE_COLORS = {
    BACKGROUND_COLOR: '#141517',
    SECONDARY_BACKGROUND: '#171923',
    BOX_SHADOW: '#2D3748',
    ERROR: '#E53E3E',
    SUCCESS: '#38A169',
    TEXT: '#CBD5E0',
    DISABLE: '#6E7076',
};

export const COLORS = {
    LIGHT_BACKGROUND_COLOR: '#F5F5F5',
    DARK_BACKGROUND_COLOR: '#141517',
    LIGHT_SECONDARY_BACKGROUND: '#FFF',
    DARK_SECONDARY_BACKGROUND: '#171923',
    LIGHT_BOX_SHADOW: '#171923',
    DARK_BOX_SHADOW: '#2D3748',
    LIGHT_ERROR: 'rgb(235, 87, 87)',
    LIGHT_SUCCESS: 'rgb(52, 199, 123)',
    DARK_ERROR: '#F94E9B',
    DARK_SUCCESS: '#3AE980',
    BLACK: '#000',
    WHITE: '#fff',
    DISABLE: '#A8A8AC',
};
export const LIGHT_DESIGN = {
    boxShadow: '4px 4px',
    border: `1px solid ${LIGHT_MODE_COLORS.BOX_SHADOW}`,
    borderRadius: '0',
};
export const DARK_DESIGN = {
    boxShadow: `4px 4px ${DARK_MODE_COLORS.BOX_SHADOW}`,
    border: `1px solid ${DARK_MODE_COLORS.BOX_SHADOW}`,
    borderRadius: '0',
};
export const TRANSITION_ANIMATION = {
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in',
    transitionDuration: '.2s',
};
export const HOVER_ANIMATION = {
    transform: 'translateY(4px) translateX(4px)',
    boxShadow: '0px 0px',
};

export const DARK_HOVER_ANIMATION = {
    transform: 'translateY(4px) translateX(4px)',
    boxShadow: `0px 0px ${DARK_MODE_COLORS.BOX_SHADOW}`,
};

export const LIGHT_HOVER_ANIMATION = {
    transform: 'translateY(4px) translateX(4px)',
    boxShadow: `0px 0px ${LIGHT_MODE_COLORS.BOX_SHADOW}`,
};

export const theme = createTheme({
    typography: {
        fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
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
                    'color': LIGHT_MODE_COLORS.TEXT,
                    'height': '40px',
                    '&: hover': {
                        ...LIGHT_HOVER_ANIMATION,
                        backgroundColor: LIGHT_MODE_COLORS.BOX_SHADOW,
                        color: LIGHT_MODE_COLORS.HOVER_TEXT,
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: `1px solid ${LIGHT_MODE_COLORS.ERROR}`,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    'boxShadow': '4px 4px',
                    'border': '1px solid',
                    'borderRadius': '0px',
                    ...TRANSITION_ANIMATION,
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    '&: hover': {
                        ...LIGHT_HOVER_ANIMATION,
                        color: COLORS.WHITE,
                    },
                    '&.Mui-selected': {
                        'transform': 'translateY(4px) translateX(4px)',
                        'boxShadow': '0px 0px',
                        'color': COLORS.WHITE,
                        '&:hover': {
                            color: COLORS.WHITE,
                        },
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    ...LIGHT_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'backgroundColor': LIGHT_MODE_COLORS.SECONDARY_BACKGROUND,
                    'height': '60px',
                    'margin': '10px 0 10px',
                    'color': LIGHT_MODE_COLORS.BOX_SHADOW,
                    '&: hover': {
                        ...LIGHT_HOVER_ANIMATION,
                        'backgroundColor': LIGHT_MODE_COLORS.BOX_SHADOW,
                        'color': LIGHT_MODE_COLORS.HOVER_TEXT,
                        '& svg': {
                            fill: LIGHT_MODE_COLORS.HOVER_TEXT,
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: LIGHT_MODE_COLORS.BOX_SHADOW,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: LIGHT_MODE_COLORS.BOX_SHADOW,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: LIGHT_MODE_COLORS.BOX_SHADOW,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginTop: '10px',
                    marginBottom: '10px',
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
                            ...LIGHT_HOVER_ANIMATION,
                        },
                        '&:hover .MuiOutlinedInput-input': {
                            ...LIGHT_HOVER_ANIMATION,
                        },
                        '&:hover .MuiInputAdornment-root': {
                            ...LIGHT_HOVER_ANIMATION,
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '0.15rem',
                            ...LIGHT_HOVER_ANIMATION,
                            borderColor: LIGHT_MODE_COLORS.BOX_SHADOW,
                        },
                        '&.Mui-focused .MuiInputAdornment-root': {
                            ...LIGHT_HOVER_ANIMATION,
                        },
                        '& .MuiInputAdornment-root': {
                            ...TRANSITION_ANIMATION,
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
                        ...TRANSITION_ANIMATION,
                        'marginRight': '10px',
                        'marginLeft': '10px',
                        'padding': '10px',
                        '&:focus': {
                            ...LIGHT_HOVER_ANIMATION,
                        },
                    },
                },
            },
        },
    },
    palette: {
        type: 'light',
        primary: {
            main: LIGHT_MODE_COLORS.BOX_SHADOW,
            disable: LIGHT_MODE_COLORS.DISABLE,
        },
        secondary: {
            main: COLORS.WHITE,
        },
        text: {
            primary: COLORS.BLACK,
            secondary: COLORS.WHITE, //date picker days color
            selected: COLORS.WHITE,
        },
        background: {
            //paper: '#000', //date picker background
            default: '#fff',
            primary: LIGHT_MODE_COLORS.BACKGROUND_COLOR,
            secondary: LIGHT_MODE_COLORS.SECONDARY_BACKGROUND,
        },
        success: {
            main: LIGHT_MODE_COLORS.SUCCESS,
        },
        error: {
            main: LIGHT_MODE_COLORS.ERROR,
        },
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
                    'color': COLORS.WHITE,
                    'height': '40px',
                    // '& svg': {
                    //     fill: COLORS.WHITE,
                    // },
                    '&.Mui-disabled': {
                        opacity: '0.4',
                        color: '#BDBDBD',
                        borderColor: DARK_MODE_COLORS.BOX_SHADOW,
                    },
                    '&: hover': {
                        ...DARK_HOVER_ANIMATION,
                        backgroundColor: DARK_MODE_COLORS.BOX_SHADOW,
                        color: DARK_MODE_COLORS.TEXT,
                    },
                },
            },
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&: not(:first-of-type)': {
                        borderLeft: `1px solid ${DARK_MODE_COLORS.ERROR}`,
                    },
                },
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    'boxShadow': '4px 4px',
                    'border': '1px solid',
                    'borderRadius': '0px',
                    ...TRANSITION_ANIMATION,
                    'margin': '10px',
                    'height': '40px',
                    'fontWeight': 'bold',
                    '&: hover': {
                        ...DARK_HOVER_ANIMATION,
                        color: COLORS.WHITE,
                    },
                    '&.Mui-selected': {
                        'transform': 'translateY(4px) translateX(4px)',
                        'boxShadow': '0px 0px',
                        'color': COLORS.WHITE,
                        '&:hover': {
                            color: COLORS.WHITE,
                        },
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    ...DARK_DESIGN,
                    ...TRANSITION_ANIMATION,
                    'backgroundColor': DARK_MODE_COLORS.SECONDARY_BACKGROUND,
                    'height': '60px',
                    'margin': '10px 0 10px',
                    'color': COLORS.WHITE,
                    '&: hover': {
                        ...DARK_HOVER_ANIMATION,
                        'backgroundColor': DARK_MODE_COLORS.BOX_SHADOW,
                        'color': DARK_MODE_COLORS.TEXT,
                        '& svg': {
                            fill: DARK_MODE_COLORS.TEXT,
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: COLORS.WHITE,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: DARK_MODE_COLORS.BOX_SHADOW,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    color: DARK_MODE_COLORS.BOX_SHADOW,
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginTop: '10px',
                    marginBottom: '10px',
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
                            ...DARK_HOVER_ANIMATION,
                        },
                        '&:hover .MuiOutlinedInput-input': {
                            ...DARK_HOVER_ANIMATION,
                        },
                        '&:hover .MuiInputAdornment-root': {
                            ...DARK_HOVER_ANIMATION,
                        },
                        '&.Mui-focused fieldset': {
                            ...DARK_HOVER_ANIMATION,
                            borderWidth: '0.1rem',
                            borderColor: COLORS.WHITE,
                        },
                        '&.Mui-focused .MuiInputAdornment-root': {
                            ...DARK_HOVER_ANIMATION,
                        },
                        '& .MuiInputAdornment-root': {
                            ...TRANSITION_ANIMATION,
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
                        ...TRANSITION_ANIMATION,
                        'marginRight': '10px',
                        'marginLeft': '10px',
                        'padding': '10px',
                        '&:focus': {
                            ...DARK_HOVER_ANIMATION,
                        },
                    },
                },
            },
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: DARK_MODE_COLORS.BOX_SHADOW,
            disable: DARK_MODE_COLORS.DISABLE,
        },
        secondary: {
            main: '#fafafa',
        },
        text: {
            primary: COLORS.WHITE,
            secondary: COLORS.BLACK,
            selected: '#fff',
        },
        background: {
            //paper: '#000', //date picker background
            default: '#fff',
            primary: DARK_MODE_COLORS.BACKGROUND_COLOR,
            secondary: DARK_MODE_COLORS.SECONDARY_BACKGROUND,
        },
        success: {
            main: DARK_MODE_COLORS.SUCCESS,
        },
        error: {
            main: DARK_MODE_COLORS.ERROR,
        },
    },
});

export { darkTheme, lightTheme };
