import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../components/budget/SearchAppBar';
import { fetchAllBudgetAction } from '../redux/slices/budgets/budgetSlices';
import { BudgetList } from '../components/budget/BudgetList';
import img from '../img/banner.png';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme';

export const Home = () => {
    const budgets = useSelector((state) => state.budgets);
    const theme = useSelector((state) => state.theme);

    //wrap in useEffect to run once
    //if not, run infinite
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBudgetAction(1));
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme.isDarkMode ? darkTheme : lightTheme}>
            <Container
                component='main'
                maxWidth='md'
                sx={{ bgcolor: 'secondary.main' }}>
                <Box
                    component='img'
                    src={img}
                    sx={{
                        boxShadow: '4px 4px',
                        border: '1px solid',
                        marginY: '10px',
                        boxSizing: 'border-box',
                        width: '100%',
                    }}
                />
                <SearchAppBar isDarkMode={theme.isDarkMode} />
                <BudgetList budgets={budgets} />
            </Container>
        </ThemeProvider>
    );
};
