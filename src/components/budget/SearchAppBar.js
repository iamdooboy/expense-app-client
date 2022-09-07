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
import TextField from '@mui/material/TextField';

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
                my: '14px',
                backgroundColor: 'background.secondary',
                height: '7vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: '10px',
            }}>
            <Grid container>
                <Grid item xs={6}>
                    <Button
                        onClick={() => dispatch(logoutUserAction())}
                        sx={{
                            minWidth: '32px',
                            height: '36px',
                            margin: '10px',
                        }}
                        startIcon={<LogoutSharpIcon />}
                    />

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

                    <Button
                        sx={{
                            minWidth: '32px',
                            height: '36px',
                            margin: '10px',
                        }}
                        startIcon={<HomeSharpIcon />}
                    />
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
