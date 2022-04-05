import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../../theme';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SearchAppBar } from '../../components/budget/SearchAppBar';
import List from '@mui/material/List';
import banner_light from '../../img/banner_light.svg';
import { TransactionItem } from './TransactionItem';

export const TransactionList = (props) => {
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
                <Grid item xs={8}>
                    <Box sx={{ height: '100vh', bgcolor: 'blue' }}>
                        <List>
                            {props?.transactions?.map((transaction) => (
                                <TransactionItem
                                    key={transaction._id}
                                    type={transaction.type}
                                    text={transaction.text}
                                    amount={transaction.amount}
                                />
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ height: '100vh', bgcolor: 'yellow' }}>xs=4</Box>
                </Grid>
            </Grid>
        </Container>
    );
};
