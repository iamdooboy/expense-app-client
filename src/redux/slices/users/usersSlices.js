import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
                    localStorage.setItem('userId', JSON.stringify(data));
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
            localStorage.removeItem('userId');
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//get user from local storage
const getUserFromStorage = localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('userId'))
    : undefined;

//slices
const userSlices = createSlice({
    name: 'users',
    initialState: {
        userData: getUserFromStorage,
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
            state.userData = action?.payload;
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
            state.userData = action?.payload;
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
