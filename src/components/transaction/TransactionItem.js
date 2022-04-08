import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    CustomTableHead,
    StyledTableCell,
    StyledTableRow,
} from '../../UI/CustomTableHead';

const StyledTypography = styled(Typography)(({ theme }) => ({
    '& .MuiTypography-root': {
        width: '100px',
        color: 'red',
    },
}));

export const TransactionItem = (props) => {
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
        </StyledTableRow>
    );
};
