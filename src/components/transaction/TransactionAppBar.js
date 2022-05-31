import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';
import { logoutUserAction } from '../../redux/slices/users/usersSlices';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/slices/theme/themeSlice';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const TransactionAppBar = (props) => {
    const navigate = useNavigate();

    const textInput = React.useRef(null);

    const dispatch = useDispatch();

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
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    height: '52px',
                    width: '25%',
                }}>
                <Typography>{props.title}</Typography>
            </Box>
            <Box
                sx={{
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    height: '52px',
                    width: '60%',
                }}>
                <Stack
                    direction='row'
                    justifyContent='space-around'
                    alignItems='center'
                    spacing={2}
                    sx={{ height: '100%', paddingX: '10px' }}>
                    <Typography>Balance: {props.balance.toFixed(2)}</Typography>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Typography>Income: {props.income.toFixed(2)}</Typography>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Typography>Expense: {props.expense.toFixed(2)}</Typography>
                </Stack>
            </Box>
        </Stack>
    );
};
