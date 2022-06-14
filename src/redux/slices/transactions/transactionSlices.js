import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const transactionActions = (actionType, HttpMethod) => {
    const action = createAsyncThunk(
        actionType,
        async (payload, { rejectWithValue, getState, dispatch }) => {
            //get user token from store
            const url = 'http://localhost:8000/api/transactions/';
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
                    return data;
                } else if (HttpMethod === 'DELETE') {
                    const newUrl = `${url}${payload}`;
                    const { data } = await axios.delete(newUrl, config);
                    return data;
                } else if (HttpMethod === 'PUT') {
                    if (actionType.includes('edit')) {
                        const newUrl = `${url}edit/${payload.id}`;
                        const { data } = await axios.put(
                            newUrl,
                            payload,
                            config
                        );
                        return data;
                    } else {
                        const newUrl = `${url}${payload.id}`;
                        console.log(newUrl);
                        const { data } = await axios.put(
                            newUrl,
                            payload,
                            config
                        );
                        return data;
                    }
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

export const deleteTransactionAction = transactionActions(
    'transactions/delete',
    'DELETE'
);

export const updateTransactionAction = transactionActions(
    'transaction/update',
    'PUT'
);

export const updateTransactionEditAction = transactionActions(
    'transaction/update/edit',
    'PUT'
);

const totalBalance = (arr) => {
    const sum = arr.reduce(
        (accumulator, object) => accumulator + object.amount,
        0
    );
    return parseFloat(sum.toFixed(2));
};

const totalExpense = (arr) => {
    let sum = 0;
    sum = arr
        .filter((obj) => obj.type === 'expense')
        .reduce((acc, obj) => acc + obj.amount, 0);
    return parseFloat(sum.toFixed(2));
};

const totalIncome = (arr) => {
    let sum = 0;
    sum = arr
        .filter((obj) => obj.type === 'income')
        .reduce((acc, obj) => acc + obj.amount, 0);
    return parseFloat(sum.toFixed(2));
};

const transactionSlices = createSlice({
    name: 'transaction',
    initialState: {},
    extraReducers: {
        [fetchAllTransactionAction.pending]: (state, action) => {
            console.log('fetching transactions...');
            state.loading = true;
        },
        [fetchAllTransactionAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.transactionData = action.payload;
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [createTransactionAction.pending]: (state, action) => {
            console.log('creating transaction...');
            state.loading = true;
        },
        [createTransactionAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.transactionData.push(action.payload);
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [deleteTransactionAction.pending]: (state, action) => {
            state.loading = true;
            console.log('deleting transaction...');
        },
        [deleteTransactionAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.transactionData = state.transactionData.filter(
                (transaction) => transaction._id !== action.payload._id
            );
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [updateTransactionEditAction.pending]: (state, action) => {
            console.log('updating transaction edit');
            state.loading = true;
        },
        [updateTransactionEditAction.fulfilled]: (state, action) => {
            state.loading = false;
            const foundIndex = state.transactionData.findIndex(
                (trasaction) => trasaction._id === action.payload._id
            );
            state.transactionData.splice(foundIndex, 1, action.payload);
        },
        [updateTransactionAction.pending]: (state, action) => {
            console.log('updating transaction');
            state.loading = true;
        },
        [updateTransactionAction.fulfilled]: (state, action) => {
            state.loading = false;
            const foundIndex = state.transactionData.findIndex(
                (trasaction) => trasaction._id === action.payload._id
            );
            state.transactionData.splice(foundIndex, 1, action.payload);
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
    },
});

export default transactionSlices.reducer;
