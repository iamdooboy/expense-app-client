import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { registerUserAction } from '../redux/slices/users/usersSlices';
import { CustomErrorField } from '../components/login/CustomErrorField';

const Copyright = (props) => {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                Duy Le
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export const Register = (props) => {
    const dispatch = useDispatch();
    const [matchingPasswords, setMatchingPasswords] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(false);
    let errorLabel = '';

    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('password') === data.get('confirm')) {
            const userData = {
                email: data.get('email'),
                password: data.get('password'),
            };
            dispatch(registerUserAction(userData));
        } else {
            setMatchingPasswords(true);
            setPasswordStrength(false);
        }
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Sign up</Typography>
                <Box
                    component='form'
                    onSubmit={submitHandler}
                    noValidate
                    sx={{ mt: 1 }}>
                    {matchingPasswords ? (
                        <CustomErrorField>
                            Password doesn't match
                        </CustomErrorField>
                    ) : (
                        ''
                    )}
                    <TextField
                        required
                        fullWidth
                        name='email'
                        label='Email Address'
                        type='email'
                        id='email'
                        margin='dense'
                        autoFocus
                    />
                    <TextField
                        error={passwordStrength}
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        margin='dense'
                        id='password'
                        helperText={passwordStrength ? 'Password is weak' : ''}
                        onBlur={(e) => {
                            if (e.target.value.length < 6) {
                                setPasswordStrength(true);
                            } else {
                                setPasswordStrength(false);
                            }
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        name='confirm'
                        label='Confirm Password'
                        type='password'
                        id='confirm'
                        margin='dense'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}>
                        Sign Up
                    </Button>
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Link
                                variant='body2'
                                component={RouterLink}
                                to='/login'>
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};
