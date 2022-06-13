import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BudgetActions = (actionType, HttpMethod) => {
    const action = createAsyncThunk(
        actionType,
        async (payload, { rejectWithValue, getState, dispatch }) => {
            const url = `http://localhost:8000/api/budgets/`;
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
                    let newUrl;
                    if (actionType.includes('title')) {
                        newUrl = `${url}/title/${payload.id}`;
                    } else if (actionType.includes('amount')) {
                        newUrl = `${url}/amount/${payload.id}`;
                    } else {
                        newUrl = `${url}/edit/${payload.id}`;
                    }
                    const { data } = await axios.put(newUrl, payload, config);
                    return data;
                } else if (HttpMethod === 'GET_ONE') {
                    const newUrl = `${url}${payload}`;
                    const { data } = await axios.get(newUrl, config);
                    return data;
                } else {
                    const newUrl = `${url.slice(0, -1)}?page=${payload}`;
                    const { data } = await axios.get(newUrl, config);
                    return data;
                }
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

export const createBudgetAction = BudgetActions('budgets/create', 'POST');

export const fetchAllBudgetAction = BudgetActions('budgets/fetchAll', 'GET');

export const fetchOneBudgetAction = BudgetActions(
    'budgets/fetchOne',
    'GET_ONE'
);

export const deleteBudgetAction = BudgetActions('budget/delete', 'DELETE');

export const updateBudgetTitleAction = BudgetActions(
    'budget/update/title',
    'PUT'
);

export const updateBudgetAmountAction = BudgetActions(
    'budget/update/amount',
    'PUT'
);

export const updateBudgetEditAction = BudgetActions(
    'budget/update/edit',
    'PUT'
);

const budgetSlices = createSlice({
    name: 'budget',
    initialState: [],
    extraReducers: {
        [fetchAllBudgetAction.pending]: (state, action) => {
            console.log('fetching data');
        },
        [fetchAllBudgetAction.fulfilled]: (state, action) => {
            return action.payload.docs;
        },
        [fetchOneBudgetAction.pending]: (state, action) => {
            console.log('fetching one data');
        },
        [fetchOneBudgetAction.fulfilled]: (state, action) => {
            return state.filter((budget) => budget._id === action.payload._id);
        },
        [createBudgetAction.pending]: (state, action) => {
            console.log('creating budget');
        },
        [createBudgetAction.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [deleteBudgetAction.pending]: (state, action) => {
            console.log('deleting budget');
        },
        [deleteBudgetAction.fulfilled]: (state, action) => {
            return state.filter((budget) => budget._id !== action.payload._id);
        },
        [updateBudgetTitleAction.pending]: (state, action) => {
            console.log('updating budget title');
        },
        [updateBudgetTitleAction.fulfilled]: (state, action) => {
            const foundIndex = state.findIndex(
                (budget) => budget._id === action.payload._id
            );
            state.splice(foundIndex, 1, action.payload);
        },
        [updateBudgetEditAction.pending]: (state, action) => {
            console.log('updating budget edit');
        },
        [updateBudgetEditAction.fulfilled]: (state, action) => {
            const foundIndex = state.findIndex(
                (budget) => budget._id === action.payload._id
            );
            state.splice(foundIndex, 1, action.payload);
        },
    },
});

export default budgetSlices.reducer;
