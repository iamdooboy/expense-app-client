import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { logoutUserAction } from '../../redux/slices/users/usersSlices';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/slices/theme/themeSlice';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { HOVER_ANIMATION, TRANSITION_ANIMATION } from '../../theme';
import { updateBudgetTitleAction } from '../../redux/slices/budgets/budgetSlices';

export const TransactionAppBar = (props) => {
    const navigate = useNavigate();
    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState(props.title);
    const textInput = React.useRef(null);
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

    return (
        <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            spacing={3}>
            <Box
                sx={{
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    height: '52px',
                    width: '15%',
                    marginTop: '10px',
                    marginBottom: '14px',
                    backgroundColor: 'background.secondary',
                }}>
                <Button
                    onClick={() => dispatch(logoutUserAction())}
                    sx={{
                        minWidth: '32px',
                        height: '32px',
                        margin: '10px',
                    }}
                    startIcon={<LogoutSharpIcon />}
                />
                <Button
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
                <Button
                    onClick={handleClickToGoBack}
                    sx={{
                        minWidth: '32px',
                        height: '32px',
                        margin: '10px',
                    }}
                    startIcon={<HomeSharpIcon />}
                />
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                onClick={() => setEditTitle(true)}
                sx={{
                    'boxShadow': '4px 4px',
                    'border': '1px solid',
                    'color': 'primary.main',
                    'backgroundColor': 'background.secondary',
                    'height': '52px',
                    'width': '25%',
                    ...TRANSITION_ANIMATION,
                    '&: hover': {
                        ...HOVER_ANIMATION,
                    },
                    '&: focus-within': {
                        ...HOVER_ANIMATION,
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
                    <Typography sx={{ color: 'text.primary' }} noWrap>
                        {title}
                    </Typography>
                )}
            </Box>
            <Box
                sx={{
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    backgroundColor: 'background.secondary',
                    height: '52px',
                    width: '60%',
                }}>
                <Stack
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                    spacing={2}
                    sx={{ height: '100%', paddingX: '10px' }}>
                    <div>
                        <Typography
                            sx={{ color: 'text.primary', opacity: '0.5' }}>
                            Balance:
                        </Typography>
                        <Typography sx={{ color: 'text.primary' }}>
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
                            sx={{ color: 'text.primary', opacity: '0.5' }}>
                            Income:
                        </Typography>
                        <Typography sx={{ color: 'text.primary' }}>
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
                            sx={{ color: 'text.primary', opacity: '0.5' }}>
                            Expense:
                        </Typography>
                        <Typography sx={{ color: 'text.primary' }}>
                            {props.expense.toFixed(2)}
                        </Typography>
                    </div>
                </Stack>
            </Box>
        </Stack>
    );
};
