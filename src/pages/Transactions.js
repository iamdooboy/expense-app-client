import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../redux/slices/transactions/transactionSlices';
import { TransactionList } from '../components/transaction/TransactionList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { NewTransaction } from '../components/transaction/NewTransaction';
import { TransactionAppBar } from '../components/transaction/TransactionAppBar';
import { updateBudgetAmountAction } from '../redux/slices/budgets/budgetSlices';
import { EditTransaction } from '../components/transaction/EditTransaction';
import { Empty } from '../components/UI/Empty';
import { useIsMount } from '../custom hooks/useIsMount';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TableContent } from '../components/transaction/TableContent';
import { Statistics } from '../components/transaction/Statistics';

export const Transactions = () => {
    const isFirstRender = useIsMount();

    const {
        loading,
        transactionData,
        balance,
        expense,
        income,
        mostExpensive,
    } = useSelector((state) => state.transactions);

    const budgetId = localStorage.getItem('budgetId')
        ? JSON.parse(localStorage.getItem('budgetId'))
        : undefined;

    const editTransaction = useSelector((state) => state.editTransaction);

    const [editTrxInfo, setEditTrxInfo] = useState({});
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const { disableMode } = useSelector((state) => state.disableTransaction);

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
                bgcolor: 'background.primary',
                overflow: 'auto',
            }}>
            {!loading && (
                <Container
                    component='main'
                    maxWidth='xl'
                    sx={{
                        bgcolor: 'background.primary',
                        height: '100vh',
                    }}>
                    <Button
                        disableRipple
                        sx={{
                            width: '100%',
                            color: 'primary.secondary',
                            height: '12vh',
                            backgroundColor: 'background.secondary',
                        }}>
                        <Typography
                            variant='h1'
                            sx={{
                                fontFamily: ['"Audiowide"', 'cursive'].join(
                                    ','
                                ),
                                background:
                                    '-webkit-linear-gradient(45deg, #48BB78 30%, #805AD5 90%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                            Budget Tracker
                        </Typography>
                    </Button>

                    <TransactionAppBar
                        balance={balance}
                        expense={expense}
                        income={income}
                        title={budgetId.title}
                        mode={theme.mode}
                        budgetId={budgetId._id}
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            {transactionData.length === 0 && !isFirstRender ? (
                                <Empty message='transaction' />
                            ) : (
                                transactionData.length > 0 && (
                                    <TableContent
                                        transactions={transactionData}
                                        disable={disableMode}
                                        setEditTrxInfo={setEditTrxInfo}
                                        editTrxInfo={editTrxInfo}
                                    />
                                )
                            )}
                        </Grid>
                        <Grid item xs={3}>
                            {transactionData?.some(
                                (obj) => obj.edit === true
                            ) ? (
                                <EditTransaction
                                    editTransaction={editTransaction}
                                    budgetId={budgetId._id}
                                />
                            ) : (
                                <NewTransaction budgetId={budgetId._id} />
                            )}

                            {mostExpensive && (
                                <Statistics
                                    mostExpensive={mostExpensive}
                                    loading={loading}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Container>
            )}
        </Box>
    );
};
