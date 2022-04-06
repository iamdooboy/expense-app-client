import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        paddingLeft: '10px',
        height: '32px',
        boxSizing: 'border-box',
        paddingTop: '0px',
        paddingBottom: '0px',
        border: '1px solid',
        boxShadow: '4px 4px',
    },
}));

export const DateInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        height: '50px',
        boxSizing: 'border-box',
        margin: '10px',
        padding: '10px',
        border: '1px solid',
        boxShadow: '4px 4px',
        cursor: 'text',
    },
}));

export const TransactionInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        height: '50px',
        boxSizing: 'border-box',
        margin: '10px',
        padding: '10px',
        border: '1px solid',
        boxShadow: '4px 4px',
        cursor: 'text',
    },
}));
