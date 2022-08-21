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

const findDuplicates = (arr) => {
    const set = new Set(arr);

    const duplicates = arr.filter((num) => {
        if (set.has(num)) {
            set.delete(num);
        } else {
            //console.log(num);
            return num;
        }
    });

    const set2 = Array.from(new Set(duplicates));
    return set2;

    // if (duplicates.length === 0) {
    //     return -1;
    // } else {
    //     return duplicates.length;
    // }
};

const createData = (amount, text, date) => {
    return { amount, text, date };
};

const getSummary = (arr) => {
    // arr.sort((a, b) => a.amount - b.amount);

    // let arr2 = arr.map((el) => el.amount);
    // arr2.sort((a, b) => a - b);

    // const duplicateAmount = findDuplicates(arr2);

    // const duplicateTransactions = duplicateAmount.map((x) => {
    //     let trx = arr.filter((y) => {
    //         if (y.amount === x) {
    //             return y;
    //         }
    //     });

    //     return trx;
    // });

    // const data = {
    //     mostExpensive: arr[0].amount,
    //     cheapest:
    //         arr[arr.length - 1].amount < 0 ? arr[arr.length - 1].amount : 'Na',

    // };
    // return data;

    // const expenses = arr.filter((element) => {
    //     if (element.type === 'expense') {
    //         return element;
    //     }
    // });

    const expenses = arr.filter((element) => element.type === 'expense');

    const incomes = arr.filter((element) => element.type === 'income');

    expenses.sort((a, b) => a.amount - b.amount);
    incomes.sort((a, b) => a.amount - b.amount);

    const numberOfExpenses = expenses.length;
    const numberOfIncomes = incomes.length;

    const mostExpensive = createData(
        expenses[0].amount,
        expenses[0].text,
        expenses[0].createdAt
    );

    const cheapest = createData(
        expenses[numberOfExpenses - 1].amount,
        expenses[numberOfExpenses - 1].text,
        expenses[numberOfExpenses - 1].createdAt
    );

    const highest = createData(
        incomes[numberOfIncomes - 1].amount,
        incomes[numberOfIncomes - 1].text,
        incomes[numberOfIncomes - 1].createdAt
    );

    const lowest = createData(
        incomes[0].amount,
        incomes[0].text,
        incomes[0].createdAt
    );

    console.log(cheapest);

    const summary = {
        mostExpensive: mostExpensive,
        cheapest: cheapest,
        highest: highest,
        lowest: lowest,
        numberOfExpenses: numberOfExpenses,
        numberOfIncomes: numberOfIncomes,
    };

    return summary;
};

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

const budgetId = localStorage.getItem('budgetId')
    ? JSON.parse(localStorage.getItem('budgetId'))
    : undefined;

const transactionSlices = createSlice({
    name: 'transaction',
    initialState: {
        balance: budgetId ? budgetId.amount : 0,
        expense: 0,
        income: 0,
        transactionData: [],
    },
    extraReducers: {
        [fetchAllTransactionAction.pending]: (state, action) => {
            console.log('pending fetch transactions...');
        },
        [fetchAllTransactionAction.fulfilled]: (state, action) => {
            console.log('fulfilled fetch transactions...');
            state.transactionData = action.payload;
            state.summary = getSummary(state.transactionData);
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [createTransactionAction.pending]: (state, action) => {},
        [createTransactionAction.fulfilled]: (state, action) => {
            state.transactionData.push(action.payload);
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [deleteTransactionAction.pending]: (state, action) => {},
        [deleteTransactionAction.fulfilled]: (state, action) => {
            state.transactionData = state.transactionData.filter(
                (transaction) => transaction._id !== action.payload._id
            );
            state.balance = totalBalance(state.transactionData);
            state.expense = totalExpense(state.transactionData);
            state.income = totalIncome(state.transactionData);
        },
        [updateTransactionEditAction.pending]: (state, action) => {
            console.log('pending transaction edit');
        },
        [updateTransactionEditAction.fulfilled]: (state, action) => {
            console.log('fulfilled transaction edit');
            const foundIndex = state.transactionData.findIndex(
                (trasaction) => trasaction._id === action.payload._id
            );
            state.transactionData.splice(foundIndex, 1, action.payload);
        },
        [updateTransactionAction.pending]: (state, action) => {
            console.log('pending update transaction');
        },
        [updateTransactionAction.fulfilled]: (state, action) => {
            console.log('fulfilled update transaction');
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
