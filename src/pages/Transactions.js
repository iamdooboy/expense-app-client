import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../redux/slices/transactions/transactionSlices';
import { TransactionList } from '../components/transaction/TransactionList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import banner_light from '../img/banner_light.svg';
import banner_dark from '../img/banner_dark.svg';
import Box from '@mui/material/Box';
import { NewTransaction } from '../components/transaction/NewTransaction';
import { TransactionAppBar } from '../components/transaction/TransactionAppBar';
import { updateBudgetAmountAction } from '../redux/slices/budgets/budgetSlices';
import { EditTransaction } from '../components/transaction/EditTransaction';
import { Empty } from '../components/UI/Empty';
import { useIsMount } from '../custom hooks/useIsMount';

export const Transactions = () => {
    const isFirstRender = useIsMount();

    const { loading, transactionData, balance, expense, income } = useSelector(
        (state) => state.transactions
    );

    const { id, edit, type, text, amount, date } = useSelector(
        (state) => state.editTransaction
    );
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const { disableMode } = useSelector((state) => state.disable);

    const budgetId = localStorage.getItem('budgetId')
        ? JSON.parse(localStorage.getItem('budgetId'))
        : undefined;

    useEffect(() => {
        if (isFirstRender) {
            console.log('First Render');
        } else {
            dispatch(
                updateBudgetAmountAction({ id: budgetId._id, amount: balance })
            );
        }
        dispatch(fetchAllTransactionAction(budgetId._id));
    }, [dispatch, balance]);

    return (
        <Box
            sx={{
                height: '100vh',
                bgcolor: 'background.default',
                overflow: 'auto',
            }}>
            {!loading && (
                <Container
                    component='main'
                    maxWidth='xl'
                    sx={{ bgcolor: 'background.default' }}>
                    <Box
                        component='img'
                        src={theme.isDarkMode ? banner_dark : banner_light}
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid',
                            boxSizing: 'border-box',
                            width: '100%',
                            color: 'primary.main',
                        }}
                    />

                    <TransactionAppBar
                        balance={balance}
                        expense={expense}
                        income={income}
                        title={budgetId.title}
                        isDarkMode={theme.isDarkMode}
                        budgetId={budgetId._id}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            {transactionData.length === 0 ? (
                                <Empty message='transaction' />
                            ) : (
                                <TransactionList
                                    transactions={transactionData}
                                    disable={disableMode}
                                />
                            )}
                        </Grid>
                        {transactionData?.some((obj) => obj.edit === true) ? (
                            <EditTransaction
                                id={id}
                                edit={edit}
                                text={text}
                                amount={amount}
                                date={date}
                                type={type}
                                budgetId={budgetId._id}
                            />
                        ) : (
                            <NewTransaction budgetId={budgetId._id} />
                        )}
                    </Grid>
                </Container>
            )}
        </Box>
    );
};
