import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { CustomButton } from '../../UI/CustomButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Stack from '@mui/material/Stack';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     backgroundColor: 'white',
//     marginLeft: 0,
//     width: '100%',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    'color': 'black',
    'boxShadow': '4px 4px',
    'border': '1px solid',
    'boxSizing': 'border-box',
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        width: '100%',
    },
}));

const BootstrapButton = styled(Button)({
    'boxShadow': 'none',
    'textTransform': 'none',
    'fontSize': 16,
    'padding': '6px 12px',
    'border': '1px solid',
    'lineHeight': 1.5,
    'backgroundColor': '#0063cc',
    'borderColor': '#0063cc',
    'fontFamily': [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export const SearchAppBar = () => {
    return (
        <Box sx={{ boxShadow: '4px 4px', border: '1px solid' }}>
            <Grid container>
                {/* <Grid item xs={1}>
                    <CustomButton startIcon={<LogoutSharpIcon />} />
                </Grid>
                <Grid item xs={1}>
                    <CustomButton startIcon={<DarkModeOutlinedIcon />} />
                </Grid>
                <Grid item xs={1}>
                    <CustomButton startIcon={<HomeSharpIcon />} />
                </Grid>
                <Grid item xs={5}>
                    <StyledInputBase placeholder='Budget Name' fullWidth />
                </Grid>
                <Grid item xs={3}>
                    <CustomButton>Add Budget</CustomButton>
                </Grid> */}

                <Grid item xs={6}>
                    <Stack
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        spacing={3}>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '40px',
                                    height: '32px',
                                    margin: '10px',
                                }}
                                startIcon={<LogoutSharpIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '40px',
                                    height: '32px',
                                    margin: '10px',
                                }}
                                startIcon={<DarkModeOutlinedIcon />}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <CustomButton
                                sx={{
                                    minWidth: '40px',
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
                        spacing={0}>
                        <Grid item={8}>
                            <StyledInputBase
                                placeholder='Budget Name'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CustomButton
                                sx={{
                                    minWidth: '70px',
                                    height: '32px',
                                    margin: '10px',
                                }}>
                                Add Budget
                            </CustomButton>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
