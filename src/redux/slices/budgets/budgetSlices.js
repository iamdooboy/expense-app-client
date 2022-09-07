import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BudgetActions = (actionType, HttpMethod) => {
    const action = createAsyncThunk(
        actionType,
        async (payload, { rejectWithValue, getState, dispatch }) => {
            const url = `${process.env.REACT_APP_URI}/api/budgets/`;
            const userToken = getState().users.userData;
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

export const fetchAllBudgetAction = BudgetActions('budgets/fetch', 'GET');

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
    initialState: { data: [] },
    extraReducers: {
        [fetchAllBudgetAction.pending]: (state, action) => {
            state.budgetLoading = true;
        },
        [fetchAllBudgetAction.fulfilled]: (state, action) => {
            state.budgetLoading = false;
            state.data = action.payload.docs;
        },
        [createBudgetAction.pending]: (state, action) => {},
        [createBudgetAction.fulfilled]: (state, action) => {
            state.data.push(action.payload);
        },
        [deleteBudgetAction.pending]: (state, action) => {},
        [deleteBudgetAction.fulfilled]: (state, action) => {
            state.data = state.data.filter(
                (budget) => budget._id !== action.payload._id
            );
        },
        [updateBudgetTitleAction.pending]: (state, action) => {
            state.loading = true;
        },
        [updateBudgetTitleAction.fulfilled]: (state, action) => {
            state.loading = false;
            const foundIndex = state.data.findIndex(
                (budget) => budget._id === action.payload._id
            );
            state.data.splice(foundIndex, 1, action.payload);
        },
        [updateBudgetAmountAction.pending]: (state, action) => {},
        [updateBudgetAmountAction.fulfilled]: (state, action) => {},
        [updateBudgetEditAction.pending]: (state, action) => {},
        [updateBudgetEditAction.fulfilled]: (state, action) => {
            const foundIndex = state.data.findIndex(
                (budget) => budget._id === action.payload._id
            );
            state.data.splice(foundIndex, 1, action.payload);
        },
    },
});

export default budgetSlices.reducer;
