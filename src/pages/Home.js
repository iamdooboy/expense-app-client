import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { SearchAppBar } from '../components/budget/SearchAppBar';
import {
    createBudgetAction,
    fetchAllBudgetAction,
} from '../redux/slices/budgets/budgetSlices';
import { BudgetList } from '../components/budget/BudgetList';
import img from '../img/banner.png';

export const Home = () => {
    const budgets = useSelector((state) => state.budgets);
    //wrap in useEffect to run once
    //if not, run infinite
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBudgetAction(1));
    }, [dispatch]);

    return (
        <Container component='main' maxWidth='md'>
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
            <SearchAppBar />
            <BudgetList budgets={budgets} />
        </Container>
    );
};
