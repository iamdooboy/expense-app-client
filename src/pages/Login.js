import React, { useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../redux/slices/users/usersSlices';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
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

// const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     //get data from stored
//     const user = useSelector((state) => state.users);
//     const { userAppError, userLoading, userServerError, userData } = user;

//     let loginBtn = (
//         <Button
//             type='submit'
//             fullWidth
//             variant='contained'
//             disabled
//             sx={{ mt: 3, mb: 2 }}>
//             Loading please wait...
//         </Button>
//     );

// if (!userLoading) {
//     loginBtn = (
//         <Button
//             type='submit'
//             fullWidth
//             variant='contained'
//             sx={{ mt: 3, mb: 2 }}>
//             Sign In
//         </Button>
//     );
// }

// const submitHandler = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const userData = {
//         email: data.get('email'),
//         password: data.get('password'),
//     };

//     dispatch(loginUserAction(userData));
// };

//     //redirect
//     useEffect(() => {
//         if (userData) {
//             navigate.push('/');
//         }
//     }, [userData]);

//     return (
//         <Container component='main' maxWidth='xs'>
//             <Box
//                 sx={{
//                     marginTop: 8,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                 }}>
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography variant='h5'>Sign in</Typography>
//                 <Box
//                     component='form'
//                     onSubmit={submitHandler}
//                     noValidate
//                     sx={{ mt: 1 }}>
//                     incorrect login credentials
//                     <UserLoginField
//                         name='email'
//                         label='Email Address'
//                         type='email'
//                         id='email'
//                         margin='normal'
//                         autoFocus
//                     />
//                     <UserLoginField
//                         name='password'
//                         label='Password'
//                         type='password'
//                         margin='normal'
//                         id='password'
//                     />
//                     <FormControlLabel
//                         control={<Checkbox value='remember' color='primary' />}
//                         label='Remember me'
//                     />
//                     {loginBtn}
//                     <Grid container>
//                         <Grid item xs>
//                             <Link href='#' variant='body2'>
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                         <Grid item>
//                             <Link
//                                 variant='body2'
//                                 component={RouterLink}
//                                 to='/register'>
//                                 {"Don't have an account? Sign Up"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//             <Copyright sx={{ mt: 8, mb: 4 }} />
//         </Container>
//     );
// };

// export default Login;

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Sign in</Typography>
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
                        label='Email Address'
                        type='email'
                        id='email'
                        margin='normal'
                        autoFocus
                    />
                    <TextField
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        margin='normal'
                        id='password'
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    {loginBtn}
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                variant='body2'
                                component={RouterLink}
                                to='/register'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default Login;
