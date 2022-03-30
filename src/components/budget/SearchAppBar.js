import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { CustomButton } from '../../UI/CustomButton';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { createBudgetAction } from '../../redux/slices/budgets/budgetSlices';
import { useDispatch } from 'react-redux';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        paddingLeft: '10px',
        height: '32px',
        boxSizing: 'border-box',
        paddingTop: '0px',
        paddingBottom: '0px',
        border: '1px solid',
        color: 'black',
        boxShadow: '4px 4px',
    },
}));

export const SearchAppBar = (props) => {
    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const budgetData = {
            title: data.get('budget'),
        };
        dispatch(createBudgetAction(budgetData));
    };

    return (
        <Box
            component='form'
            onSubmit={submitHandler}
            sx={{ boxShadow: '4px 4px', border: '1px solid' }}>
            <Grid container>
                <Grid item xs={6}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '32px',
                                    height: '32px',
                                    margin: '10px',
                                }}
                                startIcon={<LogoutSharpIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '32px',
                                    height: '32px',
                                    margin: '10px',
                                }}
                                startIcon={<DarkModeOutlinedIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '32px',
                                    height: '32px',
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
                            name='budget'
                            placeholder='Budget Name'
                        />

                        <CustomButton
                            type='submit'
                            sx={{
                                minWidth: '70px',
                                height: '32px',
                                margin: '10px',
                                fontSize: '12px',
                            }}>
                            Add Budget
                        </CustomButton>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
