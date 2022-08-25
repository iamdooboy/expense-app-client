import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toggleColorMode } from '../theme/themeSlice';

const UserActions = (actionType, path) => {
    const action = createAsyncThunk(
        actionType,
        async (userData, { rejectWithValue, getState, dispatch }) => {
            const url = `http://localhost:8000/api/users${path}`;

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            try {
                const { data } = await axios.post(url, userData, config);
                if (path === '/login') {
                    localStorage.setItem(
                        'theme',
                        JSON.stringify({ mode: 'light' })
                    );
                    if (userData.remember) {
                        localStorage.setItem(
                            'token',
                            JSON.stringify(data.token)
                        );
                    } else {
                        document.cookie = `token=${data.token}; expires=0`;
                    }
                }
                return data;
            } catch (error) {
                if (!error.response) {
                    console.error(error);
                    throw error;
                }
                return rejectWithValue(error?.response?.data);
            }
        }
    );

    return action;
};

export const loginUserAction = UserActions('users/login', '/login');

export const registerUserAction = UserActions('users/register', '/register');

export const logoutUserAction = createAsyncThunk(
    'user/logout',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            localStorage.removeItem('token');
            dispatch(
                toggleColorMode({
                    mode: 'light',
                })
            );
            localStorage.removeItem('theme');
            document.cookie =
                'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

const getUser = document.cookie
    ? document.cookie.split('=')[1]
    : localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : undefined;

//slices
const userSlices = createSlice({
    name: 'users',
    initialState: {
        userData: getUser,
        signUp: false,
    },

    extraReducers: (builder) => {
        //pending login
        builder.addCase(loginUserAction.pending, (state, action) => {
            state.userLoading = true;
            state.userAppError = undefined;
            state.userServerError = undefined;
        });

        //fulfilled login
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.userData = action?.payload.token;
            state.userLoading = false;
            state.userAppError = undefined;
            state.userServerError = undefined;
        });

        //rejected login
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.userLoading = false;
            state.userAppError = action?.payload?.msg;
            state.userServerError = action.error.message;
        });

        //////////////////////////////
        ////////// REGISTER //////////
        //////////////////////////////

        //pending register
        builder.addCase(registerUserAction.pending, (state, action) => {
            state.userLoading = true;
            state.userAppError = undefined;
            state.userServerError = undefined;
        });

        //fulfilled register
        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            state.signUp = true;
            state.userLoading = false;
            state.userAppError = undefined;
            state.userServerError = undefined;
        });

        //rejected register
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.userLoading = false;
            state.userAppError = action?.payload?.msg;
            state.userServerError = action.error.message;
        });

        builder.addCase(logoutUserAction.fulfilled, (state, action) => {
            state.userData = undefined;
        });
    },
});

export default userSlices.reducer;
