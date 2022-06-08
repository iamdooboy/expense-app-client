import React from 'react';
import { batch, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import TableCell from '@mui/material/TableCell';
import { StyledTableRow } from '../../UI/CustomTableHead';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import {
    deleteTransactionAction,
    updateTransactionEditAction,
} from '../../redux/slices/transactions/transactionSlices';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { updateEditTransactionData } from '../../redux/slices/transactions/editTransactionSlice';
import { changeDisableMode } from '../../redux/slices/budgets/disableSlice';

const CustomIconButton = styled(IconButton)({
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const TransactionItem = (props) => {
    const dispatch = useDispatch();
    const date = new Date(props.date);

    const onEditHandler = () => {
        dispatch(
            updateTransactionEditAction({
                id: props.id,
                edit: true,
            })
        );
        dispatch(
            updateEditTransactionData({
                id: props.id,
                text: props.text,
                amount: props.amount,
                type: props.type,
                date: props.date,
                edit: props.edit,
            })
        );
        dispatch(
            changeDisableMode({
                disableMode: !props.disable,
            })
        );
    };

    const updateTransaction = () => {
        dispatch(
            updateTransactionEditAction({
                id: props.id,
                edit: false,
            })
        );
        dispatch(
            changeDisableMode({
                disableMode: !props.disable,
            })
        );
    };

    let opacity;
    let color;
    let border;

    if (props.edit) {
        border = 'primary.main';
    } else if (!props.edit && props.disable) {
        opacity = 0.38;
        color = 'primary.main';
        border = '#9F9F9F';
    } else if (!props.edit && !props.disable) {
        opacity = 1;
        border = 'default';
    }

    return (
        <StyledTableRow
            key={props._id}
            sx={{
                boxShadow: props.edit ? '0px 0px' : '4px 4px',
                backgroundColor: props.edit ? 'primary.main' : 'none',
                opacity: opacity,
            }}>
            <TableCell
                component='th'
                scope='row'
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    pointerEvents: props.edit ? 'none' : 'auto',
                    borderColor: border,
                }}>
                {props.type === 'expense' ? (
                    <ArrowCircleDownSharpIcon sx={{ color: 'error.main' }} />
                ) : (
                    <ArrowCircleUpSharpIcon sx={{ color: 'success.main' }} />
                )}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    color: props.edit ? 'text.secondary' : 'text.primary',
                    borderColor: border,
                }}
                align='right'>
                {props.text}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    pointerEvents: props.edit ? 'none' : 'auto',
                    color: props.edit ? 'text.secondary' : 'text.primary',
                    borderColor: border,
                }}
                align='right'>
                {date.toLocaleDateString('en-US')}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    pointerEvents: props.edit ? 'none' : 'auto',
                    color: props.edit ? 'text.secondary' : 'text.primary',
                    borderColor: border,
                }}
                align='right'>
                {`$ ${props.amount.toFixed(2)}`}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    borderColor: border,
                }}
                align='right'>
                <CustomIconButton
                    onClick={() => dispatch(deleteTransactionAction(props.id))}
                    edge='end'
                    aria-label='delete'
                    sx={{
                        pointerEvents: props.edit ? 'none' : 'auto',
                        color: props.edit ? 'text.secondary' : 'text.primary',
                        borderColor: border,
                    }}>
                    <DeleteOutlineSharpIcon />
                </CustomIconButton>
                {props.edit ? (
                    <CustomIconButton
                        onClick={updateTransaction}
                        edge='end'
                        aria-label='cancel'
                        sx={{
                            color: props.edit
                                ? 'text.secondary'
                                : 'text.primary',
                            borderColor: border,
                        }}>
                        <CancelOutlinedIcon />
                    </CustomIconButton>
                ) : (
                    <CustomIconButton
                        onClick={onEditHandler}
                        edge='end'
                        aria-label='edit'
                        sx={{
                            color: props.edit
                                ? 'text.secondary'
                                : 'text.primary',
                            borderColor: border,
                        }}>
                        <EditSharpIcon />
                    </CustomIconButton>
                )}
            </TableCell>
        </StyledTableRow>
    );
};
