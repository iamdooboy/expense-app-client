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
