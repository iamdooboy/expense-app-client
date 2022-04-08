import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { TransactionList } from './TransactionList';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../../components/budget/SearchAppBar';
import Grid from '@mui/material/Grid';
import banner_light from '../../img/banner_light.svg';
import banner_dark from '../../img/banner_dark.svg';
import Box from '@mui/material/Box';
import { NewTransaction } from './NewTransaction';
import { useLocation } from 'react-router-dom';

export const Transactions = () => {
    const transactions = useSelector((state) => state.transactions);
    const dispatch = useDispatch();
    const { state } = useLocation();
    const theme = useSelector((state) => state.theme);

    useEffect(() => {
        dispatch(fetchAllTransactionAction(state.budgetId));
    }, [dispatch]);

    return (
        <Container
            component='main'
            maxWidth='lg'
            sx={{ bgcolor: 'background' }}>
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
            <SearchAppBar isDarkMode={theme.isDarkMode} />
            <Grid container spacing={2} sx={{ marginY: '10px' }}>
                <TransactionList transactions={transactions} />
                <NewTransaction budgetId={state.budgetId} />
            </Grid>
        </Container>
    );
};
