import React, { useState, useRef } from 'react';
import { createTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { useDispatch } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

export const NewTransaction = (props) => {
    const dispatch = useDispatch();
    const [transactionType, setTransactionType] = useState('');
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
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
            createdAt: date,
        };
        dispatch(createTransactionAction(transactionData));
        textInput.current.value = '';
        amountInput.current.value = '';
    };

    const disabledState = !text || !amount || !date || !transactionType;

    return (
        <Grid item xs={3}>
            <Box
                component='form'
                onSubmit={submitHandler}
                sx={{
                    height: '100%',
                    bgcolor: 'background.secondary',
                    boxShadow: '4px 4px',
                    border: '1px solid',
                    color: 'primary.main',
                    overflow: 'hidden',
                }}>
                <TextField
                    onBlur={(e) => setText(e.target.value)}
                    inputRef={textInput}
                    autoComplete='off'
                    fullWidth
                    name='text'
                    placeholder='Text'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton>
                                    <ClearIcon
                                        onClick={() =>
                                            (textInput.current.value = '')
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onBlur={(e) => setAmount(e.target.value)}
                    inputRef={amountInput}
                    autoComplete='off'
                    fullWidth
                    name='amount'
                    placeholder='Amount'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton>
                                    <ClearIcon
                                        onClick={() =>
                                            (amountInput.current.value = '')
                                        }
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <LocalizationProvider name='date' dateAdapter={AdapterDateFns}>
                    <DatePicker
                        disableFuture
                        views={['year', 'month', 'day']}
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
                        renderInput={(params) => (
                            <TextField fullWidth {...params} />
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
                            '&:hover': {
                                backgroundColor: 'success.main',
                                borderColor: 'success.main',
                            },
                            '&.Mui-selected': {
                                'backgroundColor': 'success.main',
                                'borderColor': 'success.main',
                                '&:hover': {
                                    backgroundColor: 'success.main',
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
                            '&:hover': {
                                backgroundColor: 'error.main',
                                borderColor: 'error.main',
                            },
                            '&.Mui-selected': {
                                'backgroundColor': 'error.main',
                                'borderColor': 'error.main',
                                '&:hover': {
                                    backgroundColor: 'error.main',
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
                        disabled={disabledState}
                        type='submit'
                        sx={{
                            margin: '10px',
                        }}>
                        Add Transaction
                    </Button>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
