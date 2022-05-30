import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/users/usersSlices';
import budgetReducer from '../slices/budgets/budgetSlices';
import disableReducer from '../slices/budgets/disableSlice';
import themeReducer from '../slices/theme/themeSlice';
import transactionReducer from '../slices/transactions/transactionSlices';
import editTransactionDataReducer from '../slices/transactions/editTransactionSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        budgets: budgetReducer,
        disable: disableReducer,
        theme: themeReducer,
        transactions: transactionReducer,
        editTransaction: editTransactionDataReducer,
    },
});

export default store;
