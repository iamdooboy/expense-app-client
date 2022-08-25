import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { loginUserAction } from '../redux/slices/users/usersSlices';
import { CustomAlert } from '../UI/CustomAlert';
import Stack from '@mui/material/Stack';
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

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false);

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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    let loginBtn = (
        <Button
            type='submit'
            fullWidth
            variant='contained'
            disabled
            sx={{ mt: 3, mb: 2 }}>
            Loading please wait...
        </Button>
    );

    if (!userLoading) {
        loginBtn = (
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}>
                Sign In
            </Button>
        );
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = {
            email: email,
            password: password,
            remember: remember,
        };

        dispatch(loginUserAction(data));
    };

    //redirect
    useEffect(() => {
        if (userData) {
            navigate('/', { replace: true });
        }
    }, [userData]);

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
                    variant='h3'>
                    Welcome Back
                </Typography>
                <Typography variant='subtitle1' sx={{ color: '#797F8E' }}>
                    Please enter your details to login
                </Typography>
                <Box
                    component='form'
                    onSubmit={submitHandler}
                    noValidate
                    sx={{ mt: 1 }}>
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
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        fullWidth
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        placeholder='Password*'
                        margin='normal'
                        InputProps={InputProps}
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                    <Stack
                        sx={{ my: 1 }}
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value='remember'
                                    color='primary'
                                    onChange={(e, val) => setRemember(val)}
                                />
                            }
                            label='Remember me'
                        />

                        <Link
                            href='#'
                            variant='body1'
                            sx={{
                                textDecoration: 'underline',
                                color: 'black',
                            }}>
                            Forgot password
                        </Link>
                    </Stack>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mb: 3, bgcolor: '#646464', color: 'white' }}>
                        Sign In
                    </Button>
                    <Box sx={{ textAlign: 'center' }}>
                        <Link
                            variant='body2'
                            component={RouterLink}
                            to='/register'
                            reloadDocument={true}>
                            {"Don't have an account? "}
                            <strong>{'Sign Up'}</strong>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Copyright sx={{ bottom: 10, left: 10, position: 'absolute' }} />
        </Container>
    );
};
