import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/usersSlices';
import budgetReducer from '../slices/budgets/budgetSlices';

const store = configureStore({
    reducer: {
        users: userReducer,
        budgets: budgetReducer,
    },
});

export default store;
