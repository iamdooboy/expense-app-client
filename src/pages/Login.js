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
import { CustomErrorField } from '../components/login/CustomErrorField';
import Stack from '@mui/material/Stack';

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

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false);

    //get data from stored
    const user = useSelector((state) => state.users);
    const { userData, userLoading, userAppError, userServerError } = user;

    const errorLabel =
        userAppError || userServerError ? (
            <CustomErrorField>
                {userAppError}
                {userServerError}
            </CustomErrorField>
        ) : (
            ''
        );

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
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
            remember: remember,
        };

        dispatch(loginUserAction(userData));
    };

    //redirect
    useEffect(() => {
        if (userData) {
            navigate('/', { replace: true });
        }
    }, [userData]);

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: '50%',
                }}>
                <Typography sx={{ my: 2 }} variant='h3'>
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
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        margin='normal'
                        autoFocus
                    />
                    <TextField
                        required
                        fullWidth
                        name='password'
                        placeholder='Password*'
                        type='password'
                        margin='normal'
                        id='password'
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
                        sx={{ mb: 3 }}>
                        Sign In
                    </Button>

                    <Box sx={{ textAlign: 'center' }}>
                        <Link
                            variant='body2'
                            component={RouterLink}
                            to='/register'>
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
