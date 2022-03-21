import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createBudgetAction } from '../redux/slices/budgets/budgetSlices';

const Home = () => {
    const dispatch = useDispatch();

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const budgetData = {
            title: data.get('budget'),
        };

        console.log(budgetData);
        dispatch(createBudgetAction(budgetData));
    };

    return (
        <Box component='form' onSubmit={submitHandler}>
            <TextField label='budget name' name='budget' />
            <Button
                type='submit'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}></Button>
        </Box>
    );
};

export default Home;
