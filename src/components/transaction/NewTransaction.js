import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransactionAction } from '../../redux/slices/transactions/transactionSlices';
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
import FormHelperText from '@mui/material/FormHelperText';
import { CustomTextfield } from './CustomTextfield';

export const NewTransaction = (props) => {
    const { budgetId } = props;

    const dispatch = useDispatch();
    const [transactionType, setTransactionType] = useState('');
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const textInput = useRef(null);
    const amountInput = useRef(null);
    const [error, setError] = useState(true);

    const handleTransactionType = (event, newTransactionType) => {
        if (amount < 0) {
            setTransactionType('expense');
        } else if (amount > 0) {
            setTransactionType('income');
        } else {
            setTransactionType('');
        }
    };

    const clearInput = (type, setType) => {
        type.current.value = '';
        setType('');
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        //const amount = parseFloat(data.get('amount'));

        const transactionData = {
            type: transactionType,
            text: text,
            amount: amount,
            budget: props.budgetId,
            createdAt: date,
        };
        dispatch(createTransactionAction(transactionData));
        clearInput(textInput, setText);
        clearInput(amountInput, setAmount);
        setTransactionType('');
        setDate(new Date());
    };

    const amountValidation = (event) => {
        const amount = parseFloat(event.target.value);

        if (amount < 0) {
            setTransactionType('expense');
        } else if (amount > 0) {
            setTransactionType('income');
        } else {
            setTransactionType('');
        }
        setAmount(amount);
    };

    const disabledState = !text || !amount || !date || !transactionType;

    return (
        <Box
            component='form'
            onSubmit={submitHandler}
            sx={{
                bgcolor: 'background.secondary',
                boxShadow: '4px 4px',
                border: '1px solid',
                color: 'primary.main',
                overflow: 'hidden',
            }}>
            {/* <CustomTextfield
                    ref={textInput}
                    text={'Text'}
                    defaultValue={'test'}
                    setFunc={setText}
                    clearInput={clearInput}
                    test={text}
                /> */}
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
                            <IconButton
                                onClick={() => clearInput(textInput, setText)}>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                onBlur={amountValidation}
                inputRef={amountInput}
                autoComplete='off'
                fullWidth
                type='text'
                name='amount'
                placeholder='Amount'
                sx={{
                    'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
                        {
                            '-webkit-appearance': 'none',
                            'margin': 'none',
                        },
                }}
                InputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={() =>
                                    clearInput(amountInput, setAmount)
                                }>
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <LocalizationProvider name='date' dateAdapter={AdapterDateFns}>
                <DatePicker
                    views={['year', 'month', 'day']}
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    onError={() => setError(!error)}
                    helperText={error ? 'asds' : 'indasfsdf'}
                    renderInput={(params) => (
                        <TextField fullWidth {...params} />
                    )}
                />
            </LocalizationProvider>
            {!error && (
                <FormHelperText sx={{ marginLeft: '10px' }} error>
                    Invalid date
                </FormHelperText>
            )}
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
    );
};
