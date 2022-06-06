import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { updateTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { changeDisableMode } from '../../redux/slices/budgets/disableSlice';
import { useDispatch } from 'react-redux';
import React, { useState, useRef } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

export const EditTransaction = (props) => {
    const dispatch = useDispatch();
    const textInput = useRef(null);
    const amountInput = useRef(null);
    const [value, setValue] = useState(new Date());
    const [transactionType, setTransactionType] = useState(props.type);

    const handleTransactionType = (event, newTransactionType) => {
        setTransactionType(newTransactionType);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const updatedTransactionData = {
            id: props.id,
            type: transactionType,
            text: data.get('text'),
            amount:
                transactionType === 'expense'
                    ? -1 * data.get('amount')
                    : data.get('amount'),
            budget: props.budgetId,
            createdAt: data.get('date'),
            edit: false,
        };

        dispatch(updateTransactionAction(updatedTransactionData));
        dispatch(
            changeDisableMode({
                disableMode: false,
            })
        );
    };

    const date = new Date(props.date);
    // const dateString = `${date.getFullYear()}-0${
    //     date.getMonth() + 1
    // }-0${date.getDate()}`;

    console.log(date.getFullYear());
    console.log(date.getMonth() + 1);
    console.log(date.getDate());

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
                    autoFocus={true}
                    inputRef={textInput}
                    autoComplete='off'
                    name='text'
                    placeholder='Text'
                    sx={{ width: '100%' }}
                />
                <StyledInputBase
                    defaultValue={
                        props.amount < 0 ? -1 * props.amount : props.amount
                    }
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
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
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
                        Update Transaction
                    </Button>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
