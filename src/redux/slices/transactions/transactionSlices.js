import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const transactionActions = (actionType, HttpMethod) => {
    const action = createAsyncThunk(
        actionType,
        async (payload, { rejectWithValue, getState, dispatch }) => {
            //get user token from store
            const url = 'http://localhost:8000/api/transactions';
            const userToken = getState().users.userData.token;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`,
                },
            };
            try {
                if (HttpMethod === 'POST') {
                    const { data } = await axios.post(url, payload, config);
                    console.log(data);
                    return data;
                } else {
                    const postConfig = {
                        ...config,
                        params: {
                            budget: payload,
                        },
                    };
                    const { data } = await axios.get(url, postConfig);
                    return data;
                }
            } catch (error) {
                if (!error?.response) {
                    console.log(error);
                    throw error;
                }
                return rejectWithValue(error?.response?.data);
            }
        }
    );
    return action;
};

export const fetchAllTransactionAction = transactionActions(
    'transactions/fetch',
    'GET'
);

export const createTransactionAction = transactionActions(
    'transactions/create',
    'POST'
);

const transactionSlices = createSlice({
    name: 'transaction',
    initialState: [],
    extraReducers: {
        [fetchAllTransactionAction.pending]: (state, action) => {
            console.log('fetching transactions...');
        },
        [fetchAllTransactionAction.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createTransactionAction.pending]: (state, action) => {
            console.log('creating transaction...');
        },
        [createTransactionAction.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
    },
});

export default transactionSlices.reducer;
