import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/usersSlices';
import budgetReducer from '../slices/budgets/budgetSlices';
import themeReducer from '../slices/theme/themeSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        budgets: budgetReducer,
        theme: themeReducer,
    },
});

export default store;
