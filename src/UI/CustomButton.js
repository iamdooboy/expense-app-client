import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)({
    'fontWeight': 'bold',
    'color': 'primary',
    'border': '1px solid',
    'boxShadow': '4px 4px',
    'borderRadius': '0',
    '&:hover': {
        backgroundColor: '#FFFF88',
    },
});

export const CustomTransactionButton = styled(Button)({
    fontWeight: 'bold',
    border: '1px solid',
    boxShadow: '4px 4px',
    borderRadius: '0',
    height: '40px',
    width: '100%',
});

export const CustomSubmitButton = styled(Button)({
    'fontWeight': 'bold',
    'color': 'primary',
    'border': '1px solid',
    'boxShadow': '4px 4px',
    'borderRadius': '0',
    'height': '40px',
    'width': '100%',
    '&:hover': {
        backgroundColor: '#FFFF88',
    },
});
