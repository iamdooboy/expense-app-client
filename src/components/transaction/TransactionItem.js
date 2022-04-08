import React from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import TableCell from '@mui/material/TableCell';
import { StyledTableRow } from '../../UI/CustomTableHead';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { deleteTransactionAction } from '../../redux/slices/transactions/transactionSlices';

const CustomIconButton = styled(IconButton)({
    'margin': 0,
    '&:hover': {
        backgroundColor: 'transparent',
    },
});

export const TransactionItem = (props) => {
    const dispatch = useDispatch();
    const date = new Date(props.date);

    return (
        <StyledTableRow key={props._id}>
            <TableCell
                component='th'
                scope='row'
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
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
                }}
                align='right'>
                {props.text}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                }}
                align='right'>
                {date.toLocaleDateString('en-US')}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                }}
                align='right'>
                {`$ ${props.amount.toFixed(2)}`}
            </TableCell>
            <TableCell
                sx={{
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                }}
                align='right'>
                <CustomIconButton
                    onClick={() => dispatch(deleteTransactionAction(props.id))}
                    edge='end'
                    aria-label='delete'>
                    <DeleteOutlineSharpIcon />
                </CustomIconButton>
            </TableCell>
        </StyledTableRow>
    );
};
