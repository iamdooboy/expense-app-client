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
// const budgetSlices = createSlice({
//     name: 'budget',
//     initialState: {
//         loading: false,
//         budgetData: undefined,
//         appError: undefined,
//         serverError: undefined,
//         budgetList: undefined,
//     },
//     extraReducers: (builder) => {
//         //pending create budget
//         builder.addCase(createBudgetAction.pending, (state, action) => {
//             state.loading = true;
//         });

//         //fulfilled create budget
//         builder.addCase(createBudgetAction.fulfilled, (state, action) => {
//             state.loading = false;
//             state.budgetData = action.payload;
//             state.appError = undefined;
//             state.serverError = undefined;
//         });

//         //rejected create budget
//         builder.addCase(createBudgetAction.rejected, (state, action) => {
//             state.loading = false;
//             state.appError = action?.payload?.msg;
//             state.serverError = action.error.message;
//         });

//         //////////////////////////////
//         ///////// FETCH ALL //////////
//         //////////////////////////////

//         //pending fetch all budget
//         builder.addCase(fetchAllBudgetAction.pending, (state, action) => {
//             state.loading = true;
//         });

//         //fulfilled fetch all budget
//         builder.addCase(fetchAllBudgetAction.fulfilled, (state, action) => {
//             console.log(action.payload);
//             state.loading = false;
//             state.budgetList = action?.payload;
//             state.appError = undefined;
//             state.serverError = undefined;
//         });

//         //rejected fetch all budget
//         builder.addCase(fetchAllBudgetAction.rejected, (state, action) => {
//             state.loading = false;
//             state.appError = action?.payload?.msg;
//             state.serverError = action?.error?.message;
//         });
//     },
// });

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
    },
});

export default budgetSlices.reducer;
