import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { createBudgetAction } from '../../redux/slices/budgets/budgetSlices';
import { logoutUserAction } from '../../redux/slices/users/usersSlices';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../../redux/slices/theme/themeSlice';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        'transitionProperty': 'all',
        'transitionTimingFunction': 'ease-in',
        'transitionDuration': '.2s',
        'paddingLeft': '10px',
        'height': '32px',
        'boxSizing': 'border-box',
        'paddingTop': '0px',
        'paddingBottom': '0px',
        'color': 'text.main',
        'border': `1px solid ${theme.palette.primary.main}`,
        'boxShadow': `4px 4px ${theme.palette.primary.main}`,
        '&:hover': {
            transform: 'translateY(4px) translateX(4px)',
            boxShadow: `0px 0px ${theme.palette.primary.main}`,
        },
        '&:focus': {
            transform: 'translateY(4px) translateX(4px)',
            boxShadow: `0px 0px ${theme.palette.primary.main}`,
            outline: `0.1rem solid`,
        },
    },
}));

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

export const SearchAppBar = (props) => {
    const textInput = useRef(null);

    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('budget')) {
            const budgetData = {
                title: data.get('budget'),
            };
            dispatch(createBudgetAction(budgetData));
            textInput.current.value = '';
        }
    };

    return (
        <Box
            component='form'
            onSubmit={submitHandler}
            sx={{
                boxShadow: '4px 4px',
                border: '1px solid',
                color: 'primary.main',
                marginTop: '14px',
                marginBottom: '18px',
                backgroundColor: 'background.secondary',
                height: '7vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: '10px',
            }}>
            <Grid container>
                <Grid item xs={6}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'>
                        <Grid item xs={1}>
                            <Button
                                onClick={() => dispatch(logoutUserAction())}
                                sx={{
                                    minWidth: '32px',
                                    height: '36px',
                                    margin: '10px',
                                }}
                                startIcon={<LogoutSharpIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                onClick={() =>
                                    dispatch(
                                        toggleColorMode({
                                            mode:
                                                props.mode === 'light'
                                                    ? 'dark'
                                                    : 'light',
                                        })
                                    )
                                }
                                sx={{
                                    minWidth: '32px',
                                    height: '36px',
                                    margin: '10px',
                                }}
                                startIcon={<DarkModeOutlinedIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                sx={{
                                    minWidth: '32px',
                                    height: '36px',
                                    margin: '10px',
                                }}
                                startIcon={<HomeSharpIcon />}
                            />
                        </Grid>
                    </Stack>
                </Grid>
                <Grid item xs={6} textAlign='right'>
                    <TextField
                        inputRef={textInput}
                        name='budget'
                        placeholder='Add a budget'
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '36px',
                            },
                        }}
                    />
                    <Button
                        type='submit'
                        sx={{
                            height: '36px',
                            margin: '10px',
                        }}>
                        Add Budget
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
