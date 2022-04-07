import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DateInputBase, TransactionInputBase } from '../../UI/CustomInput';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {
    CustomSubmitButton,
    CustomTransactionButton,
} from '../../UI/CustomButton';
import { createTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { useDispatch } from 'react-redux';

import React, { useState } from 'react';

export const NewTransaction = () => {
    const dispatch = useDispatch();
    const [transactionType, setTransactionType] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const transactionData = {
            type: transactionType,
            text: data.get('text'),
            amount: data.get('amount'),
            budget: '622f6e661cfe3a860f949ac0',
            createdAt: data.get('date'),
        };
        dispatch(createTransactionAction(transactionData));
    };
    return (
        <Grid item xs={3}>
            <Box
                component='form'
                onSubmit={submitHandler}
                sx={{
                    height: '100vh',
                    bgcolor: 'white',
                    boxShadow: '4px 4px',
                    border: '1px solid',
                }}>
                <TransactionInputBase
                    name='text'
                    placeholder='Text'
                    sx={{ width: '100%' }}
                />
                <TransactionInputBase
                    name='amount'
                    placeholder='Amount'
                    sx={{ width: '100%' }}
                />
                <DateInputBase
                    id='date'
                    type='date'
                    name='date'
                    defaultValue='2022-04-06'
                    sx={{ width: '100%' }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'>
                    <CustomTransactionButton
                        onClick={() => setTransactionType('income')}
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid green',
                            borderRadius: '0px',
                            color: 'green',
                            margin: '10px',
                        }}>
                        Income
                    </CustomTransactionButton>
                    <CustomTransactionButton
                        onClick={() => setTransactionType('expense')}
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid red',
                            borderRadius: '0px',
                            color: 'red',
                            margin: '10px',
                        }}>
                        Expense
                    </CustomTransactionButton>
                </Stack>
                <ButtonGroup fullWidth sx={{ boxSizing: 'border-box' }}>
                    <CustomSubmitButton
                        type='submit'
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid',
                            borderRadius: '0px',
                            color: 'black',
                            margin: '10px',
                        }}>
                        Add Transaction
                    </CustomSubmitButton>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
