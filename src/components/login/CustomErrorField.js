import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const CssTextField = styled(Paper)({
    textAlign: 'center',
    borderColor: '#db8171',
    backgroundColor: '#fcaea0',
    color: '#1c1d1f',
    padding: '5px',
    marginBottom: '5px',
});

export const CustomErrorField = (props) => {
    return <CssTextField variant='outlined'>{props.children}</CssTextField>;
};
