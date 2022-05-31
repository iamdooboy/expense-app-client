import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../redux/slices/transactions/transactionSlices';
import { TransactionList } from '../components/transaction/TransactionList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import banner_light from '../img/banner_light.svg';
import banner_dark from '../img/banner_dark.svg';
import Box from '@mui/material/Box';
import { NewTransaction } from '../components/transaction/NewTransaction';
import { useLocation } from 'react-router-dom';
import { TransactionAppBar } from '../components/transaction/TransactionAppBar';
import { updateBudgetAmountAction } from '../redux/slices/budgets/budgetSlices';
import { EditTransaction } from '../components/transaction/EditTransaction';

export const Transactions = () => {
    const { loading, transactionData, balance, expense, income } = useSelector(
        (state) => state.transactions
    );
    const { id, edit, type, text, amount, date } = useSelector(
        (state) => state.editTransaction
    );

    const dispatch = useDispatch();
    const { state } = useLocation();
    const theme = useSelector((state) => state.theme);
    const { disableMode } = useSelector((state) => state.disable);

    dispatch(updateBudgetAmountAction({ id: state.budgetId, amount: balance }));

    useEffect(() => {
        dispatch(fetchAllTransactionAction(state.budgetId));
    }, [dispatch]);

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
                            marginY: '10px',
                            boxSizing: 'border-box',
                            width: '100%',
                            color: 'primary.main',
                        }}
                    />

                    <TransactionAppBar
                        balance={balance ? balance : 0}
                        expense={expense ? expense : 0}
                        income={income ? income : 0}
                        title={state.title}
                        isDarkMode={theme.isDarkMode}
                    />

                    <Grid container spacing={2} sx={{ marginY: '10px' }}>
                        <TransactionList
                            transactions={transactionData}
                            disable={disableMode}
                        />
                        {transactionData?.some((obj) => obj.edit === true) ? (
                            <EditTransaction
                                id={id}
                                edit={edit}
                                text={text}
                                amount={amount}
                                date={date}
                                type={type}
                                budgetId={state.budgetId}
                            />
                        ) : (
                            <NewTransaction budgetId={state.budgetId} />
                        )}
                    </Grid>
                </Container>
            )}
        </Box>
    );
};
