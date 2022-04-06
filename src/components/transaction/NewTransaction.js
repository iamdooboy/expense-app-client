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

import React from 'react';

export const NewTransaction = () => {
    return (
        <Grid item xs={3}>
            <Box
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
                    defaultValue='2017-05-24'
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
                        sx={{
                            boxShadow: '4px 4px',
                            border: '1px solid green',
                            borderRadius: '0px',
                            color: 'black',
                            margin: '10px',
                        }}>
                        Income
                    </CustomSubmitButton>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
