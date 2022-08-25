import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../components/budget/SearchAppBar';
import { fetchAllBudgetAction } from '../redux/slices/budgets/budgetSlices';
import { BudgetList } from '../components/budget/BudgetList';
import { Empty } from '../UI/Empty';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Home = () => {
    const budgets = useSelector((state) => state.budgets);
    const { budgetLoading, data } = budgets;
    const theme = useSelector((state) => state.theme);
    const { disableMode } = useSelector((state) => state.disableBudget);

    //wrap in useEffect to run once
    //if not, run infinite
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBudgetAction(1));
    }, [dispatch]);

    return (
        <Box
            sx={{
                height: '100vh',
                bgcolor: 'background.primary',
            }}>
            {!budgetLoading && (
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
                            height: '12vh',
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
                    <SearchAppBar mode={theme.mode} />
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
