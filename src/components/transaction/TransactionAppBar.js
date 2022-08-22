import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { logoutUserAction } from '../../redux/slices/users/usersSlices';
import { useDispatch } from 'react-redux';
import { toggleColorMode } from '../../redux/slices/theme/themeSlice';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { updateBudgetTitleAction } from '../../redux/slices/budgets/budgetSlices';
import EditIcon from '@mui/icons-material/Edit';
export const TransactionAppBar = (props) => {
    const navigate = useNavigate();
    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState(props.title);
    const dispatch = useDispatch();

    const handleBlur = (event) => {
        const budgetTitle = event.target.value;

        const localStorageData = {
            _id: props.budgetId,
            title: budgetTitle,
            amount: props.balance,
        };
        localStorage.setItem('budgetId', JSON.stringify(localStorageData));

        let budgetData;
        if (props.title !== budgetTitle) {
            budgetData = {
                id: props.budgetId,
                title: budgetTitle,
            };
            dispatch(updateBudgetTitleAction(budgetData));
        }
        setEditTitle(false);
        setTitle(event.target.value);
    };

    const handleClickToGoBack = () => {
        localStorage.removeItem('budgetId');
        navigate('/', {
            replace: true,
        });
    };

    const handleLogoutAction = () => {
        localStorage.removeItem('budgetId');
        dispatch(logoutUserAction());
    };
    return (
        <Box
            component='form'
            sx={{
                marginTop: '14px',
                marginBottom: '18px',
            }}>
            <Grid container spacing={2}>
                <Grid item xs={1.8}>
                    <Box
                        sx={{
                            border: '1px solid',
                            boxShadow: '4px 4px',
                            color: 'primary.main',
                            width: '100%',
                            height: '7vh',
                            backgroundColor: 'background.secondary',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Button
                            onClick={handleLogoutAction}
                            sx={{
                                minWidth: '32px',
                                height: '36px',
                                margin: '0px 10px 0px 10px',
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
                                margin: '0px 10px 0px 10px',
                            }}
                            startIcon={<DarkModeOutlinedIcon />}
                        />

                        <Button
                            onClick={handleClickToGoBack}
                            sx={{
                                minWidth: '32px',
                                height: '36px',
                                margin: '0px 14px 0px 10px',
                            }}
                            startIcon={<HomeSharpIcon />}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            'border': '1px solid',
                            'boxShadow': '4px 4px',
                            'color': 'primary.main',
                            'width': '100%',
                            'backgroundColor': 'background.secondary',
                            'height': '7vh',
                            'display': 'flex',
                            'alignItems': 'center',
                            'justifyContent': 'center',
                            'transitionProperty': 'all',
                            'transitionTimingFunction': 'ease-in',
                            'transitionDuration': '.2s',
                            '&: hover': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px`,
                            },
                            '&: focus-within': {
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: `0px 0px`,
                            },
                        }}>
                        {editTitle ? (
                            <InputBase
                                autoFocus
                                onBlur={handleBlur}
                                align='center'
                                fullWidth
                                defaultValue={title}
                                sx={{ paddingLeft: '20px' }}
                            />
                        ) : (
                            <Grid
                                container
                                direction='row'
                                alignItems='center'
                                justifyContent='center'>
                                <Grid item>
                                    <Typography
                                        sx={{
                                            fontWeight: '500',
                                            textTransform: 'capitalize',
                                            m: 1,
                                            lineHeight: '2.8',
                                            color: 'text.primary',
                                        }}>
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        onClick={() => setEditTitle(true)}>
                                        <EditIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={6.2}>
                    <Box
                        textAlign='center'
                        sx={{
                            border: '1px solid',
                            boxShadow: '4px 4px',
                            color: 'primary.main',
                            backgroundColor: 'background.secondary',
                            height: '7vh',
                        }}>
                        <Stack
                            direction='row'
                            justifyContent='space-evenly'
                            alignItems='center'
                            spacing={2}
                            sx={{ height: '100%' }}>
                            <div>
                                <Typography
                                    sx={{
                                        justifyContent: 'center',
                                        color: 'text.primary',
                                        opacity: '0.5',
                                    }}>
                                    Balance:
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: 'text.primary',
                                    }}>
                                    {props.balance.toFixed(2)}
                                </Typography>
                            </div>

                            <Divider
                                sx={{ backgroundColor: 'primary.main' }}
                                orientation='vertical'
                                variant='middle'
                                flexItem
                            />
                            <div>
                                <Typography
                                    sx={{
                                        color: 'text.primary',
                                        opacity: '0.5',
                                    }}>
                                    Income:
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: 'text.primary',
                                    }}>
                                    {props.income.toFixed(2)}
                                </Typography>
                            </div>

                            <Divider
                                sx={{ backgroundColor: 'primary.main' }}
                                orientation='vertical'
                                variant='middle'
                                flexItem
                            />
                            <div>
                                <Typography
                                    sx={{
                                        color: 'text.primary',
                                        opacity: '0.5',
                                    }}>
                                    Expense:
                                </Typography>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        color: 'text.primary',
                                        lineHeight: '1.8',
                                    }}>
                                    {props.expense.toFixed(2)}
                                </Typography>
                            </div>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
