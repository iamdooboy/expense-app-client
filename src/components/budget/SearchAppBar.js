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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'white',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    'color': 'black',
    'border': '1px solid',
    'boxShadow': '4px 4px',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            'width': '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const SearchAppBar = () => {
    return (
        <Box sx={{ boxShadow: '4px 4px', border: '1px solid' }}>
            <Toolbar>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'none',
                            sm: 'block',
                            color: 'black',
                        },
                    }}>
                    Expense App
                </Typography>
                <CustomButton
                    sx={{ marginRight: '10px' }}
                    onClick={() => console.log('hello')}>
                    Add Budget
                </CustomButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: 'black' }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </Box>
    );
};
