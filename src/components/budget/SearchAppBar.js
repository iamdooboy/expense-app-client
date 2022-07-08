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
                marginTop: '10px',
                marginBottom: '10px',
                backgroundColor: 'background.secondary',
            }}>
            <Grid
                container
                sx={{
                    paddingTop: '5px',
                    paddingBottom: '9px',
                    paddingRight: '5px',
                    paddingLeft: '9px',
                }}>
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
                <Grid item xs={6}>
                    <Stack
                        direction='row'
                        justifyContent='flex-end'
                        alignItems='center'
                        sx={{ paddingRight: '10px' }}>
                        <StyledInputBase
                            inputRef={textInput}
                            name='budget'
                            placeholder='Budget Name'
                        />

                        <Button
                            type='submit'
                            sx={{
                                minWidth: '70px',
                                height: '32px',
                                margin: '10px',
                                fontSize: '12px',
                            }}>
                            Add Budget
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
