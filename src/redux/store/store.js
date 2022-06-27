import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/usersSlices';
import budgetReducer from '../slices/budgets/budgetSlices';
import disableBudgetReducer from '../slices/budgets/disableSlice';
import themeReducer from '../slices/theme/themeSlice';
import transactionReducer from '../slices/transactions/transactionSlices';
import editTransactionDataReducer from '../slices/transactions/editTransactionSlice';
import disableTransactionReducer from '../slices/transactions/disableSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        budgets: budgetReducer,
        disableBudget: disableBudgetReducer,
        theme: themeReducer,
        transactions: transactionReducer,
        editTransaction: editTransactionDataReducer,
        disableTransaction: disableTransactionReducer,
    },
});

export default store;
