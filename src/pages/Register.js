import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { registerUserAction } from '../redux/slices/users/usersSlices';
import { CustomAlert } from '../UI/CustomAlert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Copyright = (props) => {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}>
            {'Copyright © '}
            <Link color='inherit' href='https://iamdooboy.com/'>
                Duy Le
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const inputStyle = { WebkitBoxShadow: '0 0 0 1000px white inset' };

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const [matchingPasswords, setMatchingPasswords] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(false);

    const user = useSelector((state) => state.users);
    const { userData, userLoading, userAppError, userServerError } = user;

    const userAppErrorLabel = userAppError ? (
        <CustomAlert severity='error'>{userAppError}</CustomAlert>
    ) : (
        ''
    );
    const userServerErrorLabel = userServerError ? (
        <CustomAlert severity='error'>{userServerError}</CustomAlert>
    ) : (
        ''
    );

    const errorLabel = userAppErrorLabel
        ? userAppErrorLabel
        : userServerErrorLabel;

    const passwordErrorLabel = matchingPasswords ? (
        <CustomAlert severity='error'>Password doesn't match</CustomAlert>
    ) : (
        ''
    );

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('email') && data.get('password')) {
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
        }
    };

    const InputProps = {
        endAdornment: (
            <InputAdornment position='end'>
                <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ),
    };

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: '50%',
                }}>
                <Typography
                    sx={{ my: 2, fontWeight: 'bold', fontSize: '2.4rem' }}
                    variant='h4'>
                    Create an account
                </Typography>
                <Typography variant='subtitle1' sx={{ color: '#797F8E' }}>
                    It's quick and easy
                </Typography>
                <Box
                    component='form'
                    onSubmit={submitHandler}
                    noValidate
                    sx={{ mt: 1 }}>
                    {passwordErrorLabel}
                    {errorLabel}
                    <TextField
                        required
                        fullWidth
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email Address'
                        margin='normal'
                        autoFocus
                        inputProps={{ style: inputStyle }}
                    />
                    <TextField
                        error={passwordStrength}
                        required
                        fullWidth
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        placeholder='Password*'
                        margin='normal'
                        helperText={passwordStrength ? 'Password is weak' : ''}
                        onBlur={(e) => {
                            if (e.target.value.length < 6) {
                                setPasswordStrength(true);
                            } else {
                                setPasswordStrength(false);
                            }
                        }}
                        InputProps={InputProps}
                    />
                    <TextField
                        required
                        fullWidth
                        name='confirm'
                        type={showPassword ? 'text' : 'password'}
                        id='confirm'
                        placeholder='Confirm Password*'
                        margin='dense'
                        InputProps={InputProps}
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            mb: 3,
                            bgcolor: '#646464',
                            color: 'white',
                        }}>
                        Sign Up
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link
                            variant='body2'
                            component={RouterLink}
                            to='/login'>
                            {'Already have an account? '}
                            <strong>{'Login'}</strong>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Copyright sx={{ bottom: 10, left: 10, position: 'absolute' }} />
        </Container>
    );
};
