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
                        <StyledInputBase placeholder='Budget Name' />

                        <CustomButton
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
