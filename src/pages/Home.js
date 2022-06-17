import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../components/budget/SearchAppBar';
import { fetchAllBudgetAction } from '../redux/slices/budgets/budgetSlices';
import { BudgetList } from '../components/budget/BudgetList';
import banner_light from '../img/banner_light.svg';
import banner_dark from '../img/banner_dark.svg';
import { Empty } from '../components/UI/Empty';

export const Home = () => {
    const budgets = useSelector((state) => state.budgets);
    const { budgetLoading, data } = budgets;
    const theme = useSelector((state) => state.theme);
    const { disableMode } = useSelector((state) => state.disable);

    //wrap in useEffect to run once
    //if not, run infinite
    const dispatch = useDispatch();
    // console.log(data.length);
    // console.log(data.length < 1);

    useEffect(() => {
        dispatch(fetchAllBudgetAction(1));
    }, [dispatch]);

    return (
        <Box
            sx={{
                height: '100vh',
                bgcolor: 'background.default',
            }}>
            {!budgetLoading && (
                <Container
                    component='main'
                    maxWidth='xl'
                    sx={{
                        bgcolor: 'background.default',
                        height: '100vh',
                    }}>
                    <Box
                        component='img'
                        src={theme.isDarkMode ? banner_dark : banner_light}
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid',
                            boxSizing: 'border-box',
                            width: '100%',
                            color: 'primary.main',
                            height: '20vh',
                        }}
                    />
                    <SearchAppBar isDarkMode={theme.isDarkMode} />
                    {data.length === 0 ? (
                        <Empty message='budget' />
                    ) : (
                        <BudgetList disable={disableMode} budgets={data} />
                    )}
                </Container>
            )}
        </Box>
    );
};
