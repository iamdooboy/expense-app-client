import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    createBudgetAction,
    fetchAllBudgetAction,
} from '../redux/slices/budgets/budgetSlices';

export const Home = () => {
    //wrap in useEffect to run once
    //if not, run infinite
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllBudgetAction(1));
    }, [dispatch]);

    const allBudgets = useSelector((state) => state.budgets);
    const { loading, budgetList, appError, serverError } = allBudgets;

    console.log(loading, budgetList, appError, serverError);
    return <div>hello</div>;

    // const submitHandler = async (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     const budgetData = {
    //         title: data.get('budget'),
    //     };

    //     console.log(budgetData);
    //     dispatch(createBudgetAction(budgetData));
    // };

    // return (
    //     <Box component='form' onSubmit={submitHandler}>
    //         <TextField label='budget name' name='budget' />
    //         <Button
    //             type='submit'
    //             variant='contained'
    //             sx={{ mt: 3, mb: 2 }}></Button>
    //     </Box>
    // );
};
