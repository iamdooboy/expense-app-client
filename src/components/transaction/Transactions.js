import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { TransactionList } from './TransactionList';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../../components/budget/SearchAppBar';
import Grid from '@mui/material/Grid';
import banner_light from '../../img/banner_light.svg';
import Box from '@mui/material/Box';
import { NewTransaction } from './NewTransaction';

export const Transactions = () => {
    const transactions = useSelector((state) => state.transactions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTransactionAction('622f6e661cfe3a860f949ac0'));
    }, [dispatch]);

    //return <TransactionList transactions={transactions} />;
    return (
        <Container
            component='main'
            maxWidth='lg'
            sx={{ bgcolor: 'background' }}>
            <Box
                component='img'
                src={banner_light}
                sx={{
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    marginY: '10px',
                    boxSizing: 'border-box',
                    width: '100%',
                    color: 'primary.main',
                }}
            />
            <SearchAppBar />
            <Grid container spacing={2} sx={{ marginY: '10px' }}>
                <TransactionList transactions={transactions} />
                <NewTransaction />
            </Grid>
        </Container>
    );
};
