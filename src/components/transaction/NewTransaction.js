import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { createTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { useDispatch } from 'react-redux';
import React, { useState, useRef } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const StyledInputBase = styled(InputBase)({
    '& .MuiInputBase-input': {
        'height': '50px',
        'boxSizing': 'border-box',
        'margin': '10px',
        'padding': '10px',
        'border': '1px solid',
        'boxShadow': '4px 4px',
        'transitionProperty': 'all',
        'transitionTimingFunction': 'ease-in',
        'transitionDuration': '.2s',
        '&:hover': {
            transform: 'translateY(4px) translateX(4px)',
            boxShadow: '0px 0px',
        },
        '&:focus': {
            transform: 'translateY(4px) translateX(4px)',
            borderColor: '#000',
            borderWidth: '0.15rem',
            boxShadow: '0px 0px',
        },
    },
});

export const NewTransaction = (props) => {
    const dispatch = useDispatch();
    const [transactionType, setTransactionType] = useState('');
    const [value, setValue] = useState(new Date());
    const textInput = useRef(null);
    const amountInput = useRef(null);

    const handleTransactionType = (event, newTransactionType) => {
        setTransactionType(newTransactionType);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const amount = parseFloat(data.get('amount'));

        const transactionData = {
            type: transactionType,
            text: data.get('text'),
            amount: transactionType === 'expense' ? -1 * amount : amount,
            budget: props.budgetId,
            createdAt: data.get('date'),
        };
        dispatch(createTransactionAction(transactionData));
        textInput.current.value = '';
        amountInput.current.value = '';
    };

    return (
        <Grid item xs={3}>
            <Box
                component='form'
                onSubmit={submitHandler}
                sx={{
                    height: '100%',
                    bgcolor: 'background.default',
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    overflow: 'hidden',
                }}>
                <StyledInputBase
                    defaultValue={props.text}
                    inputRef={textInput}
                    autoComplete='off'
                    name='text'
                    placeholder='Text'
                    sx={{ width: '100%' }}
                />
                <StyledInputBase
                    inputRef={amountInput}
                    autoComplete='off'
                    name='amount'
                    placeholder='Amount'
                    sx={{ width: '100%' }}
                />
                <LocalizationProvider name='date' dateAdapter={AdapterDateFns}>
                    <DatePicker
                        disableFuture
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        renderInput={(params) => (
                            <TextField color='primary' fullWidth {...params} />
                        )}
                    />
                </LocalizationProvider>
                <ToggleButtonGroup
                    value={transactionType}
                    exclusive
                    onChange={handleTransactionType}
                    fullWidth>
                    <ToggleButton
                        sx={{
                            'color': 'success.main',
                            'boxShadow': '4px 4px',
                            'border': '1px solid',
                            'borderRadius': '0px',
                            '&:hover': {
                                backgroundColor: 'success.main',
                                color: 'white',
                                borderColor: 'success.main',
                            },
                            '&.Mui-selected': {
                                'transform': 'translateY(4px) translateX(4px)',
                                'boxShadow': '0px 0px',
                                'backgroundColor': 'success.main',
                                'color': 'white',
                                'borderColor': 'success.main',
                                '&:hover': {
                                    backgroundColor: 'success.main',
                                    color: 'white',
                                    borderColor: 'success.main',
                                },
                            },
                        }}
                        value='income'>
                        Income
                    </ToggleButton>
                    <ToggleButton
                        sx={{
                            'color': 'error.main',
                            'boxShadow': '4px 4px',
                            'border': '1px solid',
                            'borderRadius': '0px',
                            '&:hover': {
                                backgroundColor: 'error.main',
                                color: 'white',
                                borderColor: 'error.main',
                            },
                            '&.Mui-selected': {
                                'transform': 'translateY(4px) translateX(4px)',
                                'boxShadow': '0px 0px',
                                'backgroundColor': 'error.main',
                                'color': 'white',
                                'borderColor': 'error.main',
                                '&:hover': {
                                    backgroundColor: 'error.main',
                                    color: 'white',
                                    borderColor: 'error.main',
                                },
                            },
                        }}
                        value='expense'>
                        Expense
                    </ToggleButton>
                </ToggleButtonGroup>
                <ButtonGroup fullWidth sx={{ boxSizing: 'border-box' }}>
                    <Button
                        type='submit'
                        sx={{
                            'color': 'primary.main',
                            'margin': '10px',
                            '&:hover': {
                                color: 'text.secondary',
                            },
                            '&:active': {
                                backgroundColor: '#FFFF88',
                                transform: 'translateY(4px) translateX(4px)',
                                boxShadow: '0px 0px',
                            },
                        }}>
                        Add Transaction
                    </Button>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
