import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

const LIGHT_MODE_COLORS = {
    BACKGROUND_COLOR: '#EDF3F8',
    SECONDARY_BACKGROUND: '#FFF',
    BOX_SHADOW: '#171923',
    ERROR: 'rgb(235, 87, 87)',
    SUCCESS: 'rgb(52, 199, 123)',
    TEXT: '#171923',
    HOVER_TEXT: '#CBD5E0',
    DISABLE: '#A8A8AC',
};
const DARK_MODE_COLORS = {
    BACKGROUND_COLOR: '#141517',
    SECONDARY_BACKGROUND: '#171923',
    BOX_SHADOW: '#2D3748',
    ERROR: '#E53E3E',
    SUCCESS: '#38A169',
    TEXT: '#fff',
    HOVER_TEXT: '#CBD5E0',
    //DISABLE: '#BDBDBD',
    DISABLE: '#6E7076',
};

const COLORS = {
    BLACK: '#000',
    WHITE: '#fff',
    DISABLE: '#A8A8AC',
    DISABLE_DATE: '#6C6D6E',
};

const TRANSITION_ANIMATION = {
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in',
    transitionDuration: '.2s',
};

export const useCreateTheme = (mode) => {
    const getPalette = (mode) => ({
        typography: {
            fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
        },
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        //'color': 'white',
                        '&.MuiSelect-iconStandard': {
                            color:
                                mode === 'dark' ? COLORS.WHITE : COLORS.BLACK,
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        ...TRANSITION_ANIMATION,
                        'height': '40px',
                        'borderRadius': '0',
                        'boxShadow': `4px 4px ${
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW
                        }`,
                        'border': `1px solid ${
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW
                        }`,
                        'backgroundColor':
                            mode === 'dark'
                                ? DARK_MODE_COLORS.SECONDARY_BACKGROUND
                                : LIGHT_MODE_COLORS.SECONDARY_BACKGROUND,
                        'color':
                            mode === 'dark'
                                ? DARK_MODE_COLORS.TEXT
                                : LIGHT_MODE_COLORS.TEXT,
                        '&: hover': {
                            transform: 'translateY(4px) translateX(4px)',
                            boxShadow: `0px 0px ${
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.BOX_SHADOW
                                    : LIGHT_MODE_COLORS.BOX_SHADOW
                            }`,
                            backgroundColor:
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.BOX_SHADOW
                                    : LIGHT_MODE_COLORS.BOX_SHADOW,

                            color:
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.HOVER_TEXT
                                    : LIGHT_MODE_COLORS.HOVER_TEXT,
                        },
                        '&.Mui-disabled': {
                            opacity: mode === 'dark' && '0.4',
                            color:
                                mode === 'dark'
                                    ? '#BDBDBD'
                                    : LIGHT_MODE_COLORS.DISABLE,
                            borderColor:
                                mode === 'dark' && DARK_MODE_COLORS.BOX_SHADOW,
                            boxShadow: `4px 4px ${
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.DISABLE
                                    : LIGHT_MODE_COLORS.DISABLE
                            }`,
                        },
                    },
                },
            },
            MuiToggleButtonGroup: {
                styleOverrides: {
                    grouped: {
                        '&: not(:first-of-type)': {
                            borderLeft: `1px solid ${
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.ERROR
                                    : LIGHT_MODE_COLORS.ERROR
                            }`,
                        },
                    },
                },
            },
            MuiToggleButton: {
                styleOverrides: {
                    root: {
                        ...TRANSITION_ANIMATION,
                        'boxShadow': '4px 4px',
                        'border': '1px solid',
                        'borderRadius': '0px',
                        'marginTop': '10px',
                        'height': '40px',
                        'fontWeight': 'bold',
                        '&: hover': {
                            transform: 'translateY(4px) translateX(4px)',
                            boxShadow: `0px 0px ${
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.BOX_SHADOW
                                    : LIGHT_MODE_COLORS.BOX_SHADOW
                            }`,
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
                        ...TRANSITION_ANIMATION,
                        'boxShadow': `4px 4px ${
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW
                        }`,
                        'border': `1px solid ${
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW
                        }`,
                        'borderRadius': '0',
                        'backgroundColor':
                            mode === 'dark'
                                ? DARK_MODE_COLORS.SECONDARY_BACKGROUND
                                : LIGHT_MODE_COLORS.SECONDARY_BACKGROUND,
                        'height': '60px',
                        'margin': '10px 0 10px',
                        'color':
                            mode === 'dark'
                                ? DARK_MODE_COLORS.TEXT
                                : LIGHT_MODE_COLORS.TEXT,
                        '&: hover': {
                            'transform': 'translateY(4px) translateX(4px)',
                            'boxShadow': `0px 0px ${
                                mode
                                    ? DARK_MODE_COLORS.BOX_SHADOW
                                    : LIGHT_MODE_COLORS.BOX_SHADOW
                            }`,
                            'backgroundColor':
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.BOX_SHADOW
                                    : LIGHT_MODE_COLORS.BOX_SHADOW,
                            'color':
                                mode === 'dark'
                                    ? DARK_MODE_COLORS.HOVER_TEXT
                                    : LIGHT_MODE_COLORS.HOVER_TEXT,
                            '& svg': {
                                fill:
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.HOVER_TEXT
                                        : LIGHT_MODE_COLORS.HOVER_TEXT,
                            },
                        },
                    },
                },
            },
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color:
                            mode === 'dark'
                                ? DARK_MODE_COLORS.TEXT
                                : LIGHT_MODE_COLORS.TEXT,
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        color:
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW,
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        color:
                            mode === 'dark'
                                ? DARK_MODE_COLORS.BOX_SHADOW
                                : LIGHT_MODE_COLORS.BOX_SHADOW,
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
                                ...TRANSITION_ANIMATION,
                                boxShadow: `4px 4px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                                border: `1px solid ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                                borderRadius: '0',
                                // left: '10px',
                                // right: '10px',
                            },
                            '&:hover fieldset': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                            },
                            '&:hover .MuiOutlinedInput-input': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                            },
                            '&:hover .MuiInputAdornment-root': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                            },

                            '&.Mui-focused fieldset': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                                borderWidth: '0.15rem',
                                borderColor:
                                    mode === 'dark'
                                        ? COLORS.WHITE
                                        : LIGHT_MODE_COLORS.BOX_SHADOW,
                            },
                            '&.Mui-focused .MuiInputAdornment-root': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
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
                            // 'marginRight': '10px',
                            // 'marginLeft': '10px',
                            // 'padding': '10px',
                            '&:focus': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px ${
                                    mode === 'dark'
                                        ? DARK_MODE_COLORS.BOX_SHADOW
                                        : LIGHT_MODE_COLORS.BOX_SHADOW
                                }`,
                            },
                        },
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        '&.MuiInputLabel-shrink': {
                            left: '17px',
                            top: '4px',
                        },
                    },
                },
            },
        },
        palette: {
            type: 'mode',
            primary: {
                main:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.BOX_SHADOW
                        : LIGHT_MODE_COLORS.BOX_SHADOW,
                disable:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.DISABLE
                        : LIGHT_MODE_COLORS.DISABLE,
                header: mode === 'dark' ? '#1A202C' : '#E0E0E0',
                separator:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.BOX_SHADOW
                        : LIGHT_MODE_COLORS.DISABLE,
            },
            secondary: {
                main: mode === 'dark' ? '#fafafa' : COLORS.WHITE,
            },
            text: {
                primary: mode === 'dark' ? COLORS.WHITE : COLORS.BLACK,
                secondary: 'default',
                selected: COLORS.WHITE,
                disabled:
                    mode === 'dark' ? COLORS.DISABLE_DATE : COLORS.DISABLE,
            },
            action: {
                disabled:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.BOX_SHADOW
                        : LIGHT_MODE_COLORS.DISABLE,
            },
            background: {
                paper:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.SECONDARY_BACKGROUND
                        : LIGHT_MODE_COLORS.SECONDARY_BACKGROUND, //date picker background
                default: COLORS.WHITE,
                primary:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.BACKGROUND_COLOR
                        : LIGHT_MODE_COLORS.BACKGROUND_COLOR,
                secondary:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.SECONDARY_BACKGROUND
                        : LIGHT_MODE_COLORS.SECONDARY_BACKGROUND,
            },
            success: {
                main:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.SUCCESS
                        : LIGHT_MODE_COLORS.SUCCESS,
            },
            error: {
                main:
                    mode === 'dark'
                        ? DARK_MODE_COLORS.ERROR
                        : LIGHT_MODE_COLORS.ERROR,
            },
        },
    });

    return useMemo(() => createTheme(getPalette(mode)), [mode]);
};
