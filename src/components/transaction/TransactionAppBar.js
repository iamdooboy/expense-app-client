import * as React from 'react';
import Box from '@mui/material/Box';
import { CustomButton } from '../../UI/CustomButton';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { createBudgetAction } from '../../redux/slices/budgets/budgetSlices';
import { logoutUserAction } from '../../redux/slices/users/usersSlices';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/slices/theme/themeSlice';
import { StyledInputBase } from '../../UI/CustomInput';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

export const TransactionAppBar = (props) => {
    const navigate = useNavigate();

    const textInput = React.useRef(null);

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
            }}>
            <Grid container>
                <Grid item xs={4}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={2}>
                        <Grid item xs={1}>
                            <CustomButton
                                onClick={() => dispatch(logoutUserAction())}
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
                                onClick={() =>
                                    dispatch(
                                        changeTheme({
                                            isDarkMode: !props.isDarkMode,
                                        })
                                    )
                                }
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
                                onClick={() =>
                                    navigate('/', {
                                        replace: true,
                                    })
                                }
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
                <Grid
                    item
                    xs={4}
                    sx={{
                        marginY: '15px',
                        paddingRight: '10px',
                    }}>
                    <Typography>{props.title}</Typography>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{
                        marginY: '15px',
                        paddingRight: '10px',
                    }}>
                    <Typography>Balance: {props.sum.toFixed(2)}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
