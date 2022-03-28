import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const SelectedTextField = styled(TextField)(({ theme }) => ({
    'boxShadow': '4px 4px',
    'border': '1px solid',
    '& label.Mui-focused': {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiOutlinedInput-root': {
        'lineHeight': '1.6',
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
        },
    },
    '& .MuiOutlinedInput-input': {
        paddingLeft: '20px',
        fontSize: '1.25em',
    },
}));
