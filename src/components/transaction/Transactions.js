import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { TransactionList } from './TransactionList';

export const Transactions = () => {
    const transactions = useSelector((state) => state.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTransactionAction('622f6e661cfe3a860f949ac0'));
    }, [dispatch]);

    return <TransactionList transactions={transactions} />;
};
