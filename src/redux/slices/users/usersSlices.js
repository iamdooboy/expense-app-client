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
                localStorage.setItem('userId', JSON.stringify(data));
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

//get user from local storage
const getUserFromStorage = localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('user'))
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

        //success login
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            console.log(action);
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
    },
});

export default userSlices.reducer;
