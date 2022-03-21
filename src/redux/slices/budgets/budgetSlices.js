import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BudgetActions = (actionType, httpMethods) => {
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
                if (httpMethods === 'POST') {
                    const { data } = await axios.post(url, payload, config);
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

const budgetSlices = createSlice({
    name: 'budget',
    initialState: {
        loading: false,
        budgetData: undefined,
        appError: undefined,
        serverError: undefined,
    },
    extraReducers: (builder) => {
        builder.addCase(createBudgetAction.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(createBudgetAction.fulfilled, (state, action) => {
            state.loading = false;
            state.budgetData = action.payload;
            state.appError = undefined;
            state.serverError = undefined;
        });

        builder.addCase(createBudgetAction.rejected, (state, action) => {
            state.loading = false;
            state.appError = action?.payload?.msg;
            state.serverError = action.error.message;
        });
    },
});

export default budgetSlices.reducer;
