import React, { useState, useRef } from 'react';
import { updateTransactionAction } from '../../redux/slices/transactions/transactionSlices';
import { changeDisableMode } from '../../redux/slices/budgets/disableSlice';
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

export const EditTransaction = (props) => {
    const dispatch = useDispatch();
    const textInput = useRef(null);
    const amountInput = useRef(null);
    const [date, setDate] = useState(props.date);
    const [transactionType, setTransactionType] = useState(props.type);
    const [text, setText] = useState(props.text);
    const [amount, setAmount] = useState(props.amount);

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
            createdAt: date,
            edit: false,
        };

        dispatch(updateTransactionAction(updatedTransactionData));
        dispatch(
            changeDisableMode({
                disableMode: false,
            })
        );
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
                    defaultValue={props.text}
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
                    defaultValue={
                        props.amount < 0 ? -1 * props.amount : props.amount
                    }
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
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
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
                        Update Transaction
                    </Button>
                </ButtonGroup>
            </Box>
        </Grid>
    );
};
